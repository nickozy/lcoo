import { module } from 'modujs';
import modularLoad from 'modularload';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        const load = new modularLoad({
            enterDelay: 300,
            transitions: {
                customTransition: {}
            }
        });

        load.on('loaded', (transition, oldContainer, newContainer) => {
            this.call('destroy', oldContainer, 'app');
            navCheck();
            this.call('update', newContainer, 'app');
        });

        

        function navCheck(){
    const main = document.body
            main.classList.remove('menu-open');
            
        }
    }
}