(function(global){
    var doc = global.document;
    var buttons = doc.querySelectorAll('.buttons button');
    var btn_apply = doc.querySelector('.btn-apply');
    var btn_start = doc.querySelector('.btn-start');

    var apple_stock = doc.querySelector('#apple_stock');
    var orange_stock = doc.querySelector('#orange_stock');
    var banana_stock = doc.querySelector('#banana_stock');

    var isStart = false;

    var getOrderFruitService = function(fruit_name, fruits){
        var orderFruit = function(){
            fruits[fruit_name]--;
            var view = doc.querySelector('.' + fruit_name);
            view.innerHTML = fruits[fruit_name];
        }
        return orderFruit;
    };

    var fruits = {
        'apple': 0,
        'orange': 0,
        'banana': 0
    }
    global.fruits = fruits;

    btn_apply.onclick = function(){
        fruits.apple = apple_stock.value;
        fruits.orange = orange_stock.value;
        fruits.banana = banana_stock.value;

        if(!isStart)
        {
            for(var prop in fruits)
            {
                var view = doc.querySelector('.' + prop);
                view.innerHTML = fruits[prop];
            }
            isStart = true;
        }
    };

    btn_start.onclick = function(){
        for(var i = 0, l = buttons.length; i < l; i++)
        {
            fruit_name = buttons[i].getAttribute('data-fruit');
            buttons[i].onclick = getOrderFruitService(fruit_name, fruits);
        }
    }


})(this);
