/*
Copyright 2013 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/*global demo:true, fluid, jQuery*/

// JSLint options
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

var demo = demo || {};
(function ($, fluid) {

    /**
     * Composite Panels
     */
    fluid.defaults("demo.panels.speaking", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            label: ".mpe-speaking-header"
        },
        protoTree: {
            label: {messagekey: "speakingHeader"}
        }
    });
    fluid.defaults("demo.panels.increasing", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            label: ".mpe-increasing-header"
        },
        protoTree: {
            label: {messagekey: "increasingHeader"}
        }
    });


})(jQuery, fluid);
