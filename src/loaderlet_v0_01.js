/*
*
*   Loaderlet
*   -
*   A simple javascript loader
*   Version 0.1
*
*   Author: Jay ho Lee
*
*   Very simple(and messy) Javascript library loader, designed for test and developing use.
*   This loader uses several CDN(Google, Microsoft, ...) or directly via each project site.
*   This library is released on MIT License. See LICENSE file for detail.
*
*   Should work well in Chrome and Safari.
*/

var lodrlt = function(){(function(){
//Getting size of an associative array(object)
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var opt = null;
var load = function(optarg){
        
        var option = optarg;
        var requireLoc = loaderlet.tree[option].url;
        var loading = document.createElement("script");
        loading.setAttribute("src",requireLoc);
        document.head.appendChild(loading);
        if(loading){
        option = null;
        requireLoc = null;
        loading = null;}
    };


var loaderlet = {
    ////ADD MORE LIBRARY BY PUTTING OBJECTS IN THE tree.
    tree:{
        1:{ modulename:"jQuery",
            Dependency:null,
            version:"1.7.1",
            url:"http://code.jquery.com/jquery-1.9.0.js"
            },
        2:{ modulename:"Zepto",
            Dependency:null,
            version:"0.8",
            url:"http://zeptojs.com/javascripts/zepto.min.js"
        },
        3:{ modulename:"Backbone",
            Dependency:"Underscore",
            version:"1.7.1",
            url:"http://documentcloud.github.com/backbone/backbone-min.js"
        },
        4:{ modulename:"Underscore",
            Dependency:null,
            version:"1.3.1",
            url:"http://documentcloud.github.com/underscore/underscore-min.js"
        },
        5:{ modulename:"Mordernizer",
            Dependency:null,
            version:"dev-2.0.6",
            url:"http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.0.6-development-only.js"
        },
        6:{ modulename:"D3",
            Dependency:null,
            version:"v2",
            url:"http://mbostock.github.com/d3/d3.v2.js"
        },
        7:{ modulename:"Raphael",
            Dependency:null,
            version:"2.0.2",
            url:"https://raw.github.com/DmitryBaranovskiy/raphael/master/raphael-min.js"
        },
        8:{ modulename:"EaselJS",
            Dependency:null,
            version:"0.4",
            url:"https://raw.github.com/gskinner/EaselJS/master/lib/easel.js"
          }
        ////END OF TREE
        },
    ask: function (){
        //opt = window.prompt("Loading option:\r\r1.jQuery\r2.Zepto\r3.backbone\r4.underscore\r5.Mordernizer\r6.D3\r7.Raphael\r8.EaselJS\r");
        opt = window.prompt(loadopt);
        if (opt){
            console.log("You have selected "+opt+":"+this.tree[opt].modulename+", sir.");
            if(this.tree[opt].Dependency){
            console.log("ALERT>>> This library has dependency. You have to load "+this.tree[opt].Dependency+" as well, sir.");
            }
            else{console.log("FYI, This library has no dependency.");}
        }
        else{
            alert(this + ": invalid option or command. Try again, sir.");
        }

    }
    //ADD ANY JAVASCRIPT LIBRARY YOU WANT TO USE.
    
    };

var treesize=Object.size(loaderlet.tree);
var loadopt="Loading options:\r";
for(var i=1;i<=treesize;i++){
    
    loadopt = loadopt+i+". "+loaderlet.tree[i].modulename+"\r";

}

//methods
loaderlet.ask();

//error check
    if(opt){
        load(opt);
    }
    else{console.log("process was terminated unexpectedly.");}
//reset for memory
    opt = null;
    loaderlet = null;
})(window)}

