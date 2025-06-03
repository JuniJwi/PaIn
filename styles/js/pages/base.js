/* ==================================================================== */
/* Import Utilities
======================================================================= */
import { charadex } from '../utilities.js';

/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  let loadHTML = $(".load-html");
  console.log("There are ", loadHTML.length, "loadable HTML elements.");
  while (loadHTML.length > 0) {
    charadex.tools.loadIncludedFiles();
    loadHTML = $(".load-html");
    console.log("There are ", loadHTML.length, "loadable HTML elements.");
  }
  charadex.tools.updateMeta();
  charadex.tools.loadPage('#charadex-body', 100);
});