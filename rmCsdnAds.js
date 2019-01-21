// ==UserScript==
// @name         rmCsndAds
// @namespace    https://github.com/liuye1996/removeCsdnAds
// @version      1.3
// @description  rmCsndAds v1.3
// @author       github@liuye1996
// @match        https://blog.csdn.net/*
// @match        https://www.csdn.net/*
// @match        https://bbs.csdn.net/*
// @match        http://www.runoob.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    function isNotEmpty(str){
        return str!="undefined"&&str!=null&str!="";
    }
    function removeDivAds(){
        $("body").find("div").each(function () {
            var id = $(this).attr("id");
            if(isNotEmpty(id)){
                var idStr = id.match(/(kp_box_\d{1,4})|(ad-\d{6})/);
                if (isNotEmpty(idStr)) {
                    $(this).parents("div").each(function(){
                        var boxStr = $(this).attr("class");
                        if(isNotEmpty(boxStr)&&(boxStr=="box hot"||boxStr=="aside-content text-center")){
                            $(this).parent().remove();
                        }
                    });
                    $(this).remove();
                }
            }
            var adClass = $(this).attr("class");
            if(isNotEmpty(adClass)){
                var classStr = adClass.match(/(-ad-box)|(fourth_column)|(ad_item)|(ad-\d{6})/);
                if(isNotEmpty(classStr)){
                    $(this).remove();
                    console.log("remove"+this);
                }
            }
        });
    }
    function removeRightAds(){
        $(".recommend-right").find("li").each(function () {
            var li = $(this).attr("class");
            console.log("flag");
            if(isNotEmpty(li)){
                var liStr = li.match(/_(ads)_/);
                if (isNotEmpty(liStr)) {
                    $(this).remove();
                }
            }
        });
    }
    window.onload=function (){
        removeDivAds();
        removeRightAds();
    }
})();
