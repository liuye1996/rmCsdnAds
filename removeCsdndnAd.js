function isEmpty(str){
    return str!="undefined"&&str!=null&str!="";
}
$("body").find("div").each(function () {
    var id = $(this).attr("id");
    if(isEmpty(id)){
        var idStr = id.match(/(kp_box_\d{1,4})/);
        if (isEmpty(idStr)) {
            $(this).parents("div").each(function(){
                var boxStr = $(this).attr("class");
                if(isEmpty(boxStr)&&(boxStr=="box hot"||boxStr=="aside-content text-center")){
                    $(this).parent().remove();
                }
            })
            $(this).remove();
        }
    }
    var adClass = $(this).attr("class");
    if(isEmpty(adClass)){
        var classStr = adClass.match(/(-ad-box)|(fourth_column)|(ad_item)/);
        if(classStr!=undefined&&classStr!=null&&classStr!=""){
            $(this).remove();
        }
    }
})
$(".recommend-right").find("li").each(function () {
    var li = $(this).attr("class");
    if(isEmpty(li)){
        var liStr = li.match(/_(ads)_/);
        if (isEmpty(liStr)) {
            $(this).remove();
        }
    }
})