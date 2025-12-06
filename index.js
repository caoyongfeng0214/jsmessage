const bus = new EventTarget();

const send = (type, detail) => {
    if(detail === undefined) {
        detail = {};
    }
    bus.dispatchEvent(new CustomEvent(type, { detail }));
};

const message = {
    on(type, handler) {
        const wrapped = (e) => handler(e.detail);
        bus.addEventListener(type, wrapped);
        return () => bus.removeEventListener(type, wrapped);
    },
    once(type, handler) {
        const wrapped = (e) => handler(e.detail);
        bus.addEventListener(type, wrapped, { once: true });
    },
    send
};


export default message;
export { send };