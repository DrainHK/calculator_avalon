
var vm = avalon.define({
    $id: 'calculator',
    cName: 'cal-container',
    titleObj: {title: 'hehe'},
    color: 'color-red',
    figure: '0',
    toggle: true,
    arr: ['1','2','3','+','4','5','6','-','7','8','9','*','0','C','=','/'],
    obj: { backgroundColor: '#eee','text-align':'center' },
    btnClick: function(el){
        //el : 0~9  '=' 'C' '/'
        switch (el){
            case 'C':
                vm.figure = '0';
                break;
            case '=':
                vm.figure = String(eval(vm.figure));
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                var temp = vm.figure.charAt(vm.figure.length-1);
                vm.figure = ['+','-','*','/'].indexOf(temp) == -1?vm.figure:vm.figure.slice(0,-1);
                vm.figure += el;
                break;
            default:
                vm.figure += el;
        }
        if(vm.figure != '0' && vm.figure.charAt(0) == '0'){
            vm.figure = vm.figure.substring(1);
        }

    },
    callBack: function(){
        console.log('渲染完毕');
    }
});
