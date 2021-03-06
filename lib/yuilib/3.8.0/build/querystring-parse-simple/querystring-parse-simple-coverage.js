/*
YUI 3.8.0 (build 5744)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/querystring-parse-simple/querystring-parse-simple.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/querystring-parse-simple/querystring-parse-simple.js",
    code: []
};
_yuitest_coverage["build/querystring-parse-simple/querystring-parse-simple.js"].code=["YUI.add('querystring-parse-simple', function (Y, NAME) {","","// @TODO this looks like we are requiring the user to extract the querystring","// portion of the url, which isn't good.  The majority use case will be to","// extract querystring from the document configured for this YUI instance.","// This should be the default if qs is not supplied.","","/*global Y */","/**"," * <p>Provides Y.QueryString.stringify method for converting objects to Query Strings."," * This is a simpler implementation than the full querystring-stringify.</p>"," * <p>Because some things may require basic query string escaping functionality,"," * this module provides the bare minimum functionality (decoding a hash of simple values),"," * without the additional support for arrays, objects, and so on.</p>"," * <p>This provides a friendly way to deserialize basic query strings, without necessitating"," * a lot of code for simple use-cases.</p>"," *"," * @module querystring"," * @submodule querystring-parse-simple"," */","","var QueryString = Y.namespace(\"QueryString\");","","QueryString.parse = function (qs, sep, eq) {","    sep = sep || \"&\";","    eq = eq || \"=\";","    for (","        var obj = {},","            i = 0,","            pieces = qs.split(sep),","            l = pieces.length,","            tuple;","        i < l;","        i ++","    ) {","        tuple = pieces[i].split(eq);","        if (tuple.length > 0) {","            obj[QueryString.unescape(tuple.shift())] = QueryString.unescape(tuple.join(eq));","        }","    }","    return obj;","};","","QueryString.unescape = function (s) {","    return decodeURIComponent(s.replace(/\\+/g, ' '));","};","","","}, '3.8.0', {\"requires\": [\"yui-base\"]});"];
_yuitest_coverage["build/querystring-parse-simple/querystring-parse-simple.js"].lines = {"1":0,"22":0,"24":0,"25":0,"26":0,"27":0,"36":0,"37":0,"38":0,"41":0,"44":0,"45":0};
_yuitest_coverage["build/querystring-parse-simple/querystring-parse-simple.js"].functions = {"parse:24":0,"unescape:44":0,"(anonymous 1):1":0};
_yuitest_coverage["build/querystring-parse-simple/querystring-parse-simple.js"].coveredLines = 12;
_yuitest_coverage["build/querystring-parse-simple/querystring-parse-simple.js"].coveredFunctions = 3;
_yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 1);
YUI.add('querystring-parse-simple', function (Y, NAME) {

// @TODO this looks like we are requiring the user to extract the querystring
// portion of the url, which isn't good.  The majority use case will be to
// extract querystring from the document configured for this YUI instance.
// This should be the default if qs is not supplied.

/*global Y */
/**
 * <p>Provides Y.QueryString.stringify method for converting objects to Query Strings.
 * This is a simpler implementation than the full querystring-stringify.</p>
 * <p>Because some things may require basic query string escaping functionality,
 * this module provides the bare minimum functionality (decoding a hash of simple values),
 * without the additional support for arrays, objects, and so on.</p>
 * <p>This provides a friendly way to deserialize basic query strings, without necessitating
 * a lot of code for simple use-cases.</p>
 *
 * @module querystring
 * @submodule querystring-parse-simple
 */

_yuitest_coverfunc("build/querystring-parse-simple/querystring-parse-simple.js", "(anonymous 1)", 1);
_yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 22);
var QueryString = Y.namespace("QueryString");

_yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 24);
QueryString.parse = function (qs, sep, eq) {
    _yuitest_coverfunc("build/querystring-parse-simple/querystring-parse-simple.js", "parse", 24);
_yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 25);
sep = sep || "&";
    _yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 26);
eq = eq || "=";
    _yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 27);
for (
        var obj = {},
            i = 0,
            pieces = qs.split(sep),
            l = pieces.length,
            tuple;
        i < l;
        i ++
    ) {
        _yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 36);
tuple = pieces[i].split(eq);
        _yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 37);
if (tuple.length > 0) {
            _yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 38);
obj[QueryString.unescape(tuple.shift())] = QueryString.unescape(tuple.join(eq));
        }
    }
    _yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 41);
return obj;
};

_yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 44);
QueryString.unescape = function (s) {
    _yuitest_coverfunc("build/querystring-parse-simple/querystring-parse-simple.js", "unescape", 44);
_yuitest_coverline("build/querystring-parse-simple/querystring-parse-simple.js", 45);
return decodeURIComponent(s.replace(/\+/g, ' '));
};


}, '3.8.0', {"requires": ["yui-base"]});
