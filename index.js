function fireEvent(element, name){
    var event;

    if (document.createEventObject) {
        event = document.createEventObject();
        return element.fireEvent('on' + name, event);
    }
    else {
        event = document.createEvent('HTMLEvents');
        event.initEvent(name, true, true );
        return !element.dispatchEvent(event);
    }
}

module.exporsts = fireEvent;
