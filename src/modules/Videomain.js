import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
    }
    init(){
        const el = this.el
    if(window.innerWidth > 767){
        el.setAttribute("src", "https://files.starterapp.co/api/v1/buckets/breadhead/objects/download?preview=true&prefix=ZHViX2NhbXBhaWduLWRlc2t0b3AubXA0&version_id=null")
    }
    else{
        el.setAttribute("src", "https://files.starterapp.co/api/v1/buckets/breadhead/objects/download?preview=true&prefix=Tk8gTE9HT19EVUJfQ2FtcGFpZ25fdGVhc2VyX21vYmlsZV8zMDAwLm1wNA==&version_id=null")
    }
    }
}  