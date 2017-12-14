function fireEvent(element, name) {
    if (!element) {
        return;
    }

    var event;

    if (document.createEventObject) {
        event = document.createEventObject();
        return element.fireEvent('on' + name, event);
    }

    event = document.createEvent('HTMLEvents');
    event.initEvent(name, true, true);
    return !element.dispatchEvent(event);
}

module.exports = fireEvent;
