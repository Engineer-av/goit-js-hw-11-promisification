(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"07mQ":function(n,e){const t=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],o=(n,e)=>{const t=n.map(n=>n.name===e?{...n,active:!n.active}:n);return new Promise(n=>{n(t)})},a=n=>console.table(n);o(t,"Mango").then(a),o(t,"Lux").then(a)},FJqk:function(n,e){const t=n=>{const e=(t=200,o=500,Math.floor(Math.random()*(o-t+1)+t));var t,o;return new Promise((t,o)=>{setTimeout(()=>{Math.random()>.3?t(n.id,e):o(n.id)},e)})},o=(n,e)=>{console.log(`Transaction ${n} processed in ${e}ms`)},a=n=>{console.warn(`Error processing transaction ${n}. Please try again later.`)};t({id:70,amount:150}).then(o).catch(a),t({id:71,amount:230}).then(o).catch(a),t({id:72,amount:75}).then(o).catch(a),t({id:73,amount:100}).then(o).catch(a)},L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("L1EO"),t("fR1x"),t("07mQ"),t("FJqk")},fR1x:function(n,e){const t=n=>new Promise(e=>{setTimeout(()=>{e(n)},n)}),o=n=>console.log(`Resolved after ${n}ms`);t(2e3).then(o),t(1e3).then(o),t(1500).then(o)}},[["QfWi",1]]]);
//# sourceMappingURL=main.79360a044b263a8ae7d0.js.map