/* ==================================================================== */
/* Import Utilities
======================================================================= */
import { charadex } from '../utilities.js';

/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  charadex.tools.loadIncludedFiles();
  charadex.tools.loadIncludedFiles(); // we only ever go 2 deep...
  charadex.tools.updateMeta();
  charadex.tools.loadPage('#charadex-body', 100);
});