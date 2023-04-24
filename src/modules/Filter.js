import { module } from "modujs";



export default class extends module {
  constructor(m) {
    super(m);
  }

  init() {

    console.log("true");
    setTimeout(()=>{
      FsAttributes.cmsfilter.destroy();
      FsAttributes.cmsfilter.init();
    }, 50)
   

  }  
}
