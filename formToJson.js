function formToJson(){
	var formArr = $('#main-form').serializeArray();
    var formJson = {};
    $.each(formArr, function(){
        if(formJson[this.name] !== undefined){
            if(!formJson[this.name].push){
                formJson[this.name] = [formJson[this.name]];
            }
            formJson[this.name].push($.trim(this.value) || '');
        }else{
            formJson[this.name] = $.trim(this.value) || '';
        }
    });
}