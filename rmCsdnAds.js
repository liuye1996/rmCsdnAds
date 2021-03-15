// ==UserScript==
// @name         rmCsndAds
// @namespace    https://github.com/liuye1996/removeCsdnAds
// @version      1.3
// @description  rmCsndAds v1.3
// @author       github@liuye1996
// @match        https://blog.csdn.net/*
// @match        https://www.csdn.net/*
// @match        https://bbs.csdn.net/*
// @match        https://www.runoob.com/*
// @match        https://www.baidu.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    function isNotEmpty(str){
        return str!="undefined"&&str!=null&&str!="";
    }
    //删除div元素中的广告内容
    function removeDivAds(){
        $("body").find("div").each(function () {
            var id = $(this).attr("id");
            if (isNotEmpty(id)){
                var idStr = id.match(/(kp_box_\d{1,4})|(ad-\d{6})/);
                if (isNotEmpty(idStr)) {
                    var flag = true;
                    $(this).parents("div").each(function(){
                        var boxStr = $(this).attr("class");
                        if(isNotEmpty(boxStr)&&(boxStr=="box hot"||boxStr=="aside-content text-center")){
                            $(this).parent().remove();
                            flag = false;
                        }
                    });
                    if (flag){
                        $(this).remove();
                    }
                }
            }
            var adClass = $(this).attr("class");
            if (isNotEmpty(adClass)){
                var classStr = adClass.match(/(-ad-box)|(fourth_column)|(ad_item)|(ad-\d{6})/);
                if (isNotEmpty(classStr)){
                    $(this).remove();
                    console.log("remove"+this);
                }
            }
        });
    }
    //删除右侧推荐栏中的广告
    function removeRightAds(){
        $(".recommend-right").find("li").each(function () {
            var li = $(this).attr("class");
            if (isNotEmpty(li)){
                var liStr = li.match(/_(ads)_/);
                if (isNotEmpty(liStr)) {
                    $(this).remove();
                }
            }
        });
    }
    function removeBaidu(){
        $(".cr-content").find("div").each(function () {
            var title = $(this).attr("title");
            if (title == "搜索热点"){
                    $(this).parent().remove();
            }
        });
        $(".FYB_RD").find("div").each(function () {
            var title = $(this).attr("title");
            if (title == "百度热榜"){
                    $(this).parent().remove();
            }
        });
    }
    window.onload=function (){
        removeDivAds();
        removeRightAds();
        removeBaidu();
    }
})();
