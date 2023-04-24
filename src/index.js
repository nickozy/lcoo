import modular from "modujs";
import * as modules from "./modules";

const html = document.documentElement;

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--vh", `${window.innerHeight}px`);
};
// window.addEventListener("resize", appHeight);
appHeight();

const app = new modular({
  modules: modules,
});

window.onload = (event) => {
  const $style = document.getElementById("main-css");

  if ($style) {
    if ($style.isLoaded) {
      init();
    } else {
      $style.addEventListener("load", (event) => {
        init();
      });
    }
  } else {
    console.warn('The "main-css" stylesheet not found');
  }
};

function init() {
  app.init(app);

  html.classList.add("is-loaded");
  html.classList.add("is-ready");
  html.classList.remove("is-loading");

  /**
   * Eagerly load the following fonts.
   */
  // if (isFontLoadingAPIAvailable) {
  //   loadFonts(EAGER_FONTS, config.IS_DEV).then((eagerFonts) => {
  //     html.classList.add("fonts-loaded");

  //     if (config.IS_DEV) {
  //       console.group(
  //         "Eager fonts loaded!",
  //         eagerFonts.length,
  //         "/",
  //         document.fonts.size
  //       );
  //       console.group("State of eager fonts:");
  //       eagerFonts.forEach((font) =>
  //         console.log(
  //           font.family,
  //           font.style,
  //           font.weight,
  //           font.status /*, font*/
  //         )
  //       );
  //       console.groupEnd();
  //       console.group("State of all fonts:");
  //       document.fonts.forEach((font) =>
  //         console.log(
  //           font.family,
  //           font.style,
  //           font.weight,
  //           font.status /*, font*/
  //         )
  //       );
  //       console.groupEnd();
  //     }
  //   });
  // }
}
