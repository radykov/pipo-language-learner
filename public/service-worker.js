if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const t=e=>i(e,a),d={module:{uri:a},exports:o,require:t};s[a]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-0ff6656d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"images/favicon.png",revision:"2d29fc1ce3618fd3ce8e0ca16441940b"},{url:"images/icon_192.png",revision:"3886d86f139fb4fccd1633517ce91f1a"},{url:"images/icon_512.png",revision:"25473a31ef9deb3f53a05d8915621d1b"},{url:"images/icon.png",revision:"0f79e7333c9741c33182390aa6c6f022"},{url:"index.html",revision:"b1fab8ce755781e43e9c00ff7f2311c6"},{url:"manifest.json",revision:"d0043a6e008dbf876baaf62f8d84a26e"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"service-worker.js.map",revision:"f1d830e7cac5fd7fa2de412c0d2b0fb3"},{url:"stories/badminton_avenger:_the_smash_for_justice/cantonese.json",revision:"c5a2f0ea792564226f818589caaba3b3"},{url:"stories/badminton_avenger:_the_smash_for_justice/english.json",revision:"bfec15b44463a67c8ccbc508b4c90286"},{url:"stories/badminton_avenger:_the_smash_for_justice/french.json",revision:"b3669365817fd15a9bf29ea25b866550"},{url:"stories/badminton_avenger:_the_smash_for_justice/mandarin.json",revision:"fe1f3560ed0ef989efd4a5c2602c0e9a"},{url:"stories/badminton_avenger:_the_smash_for_justice/spanish.json",revision:"ba8592183daa6194dadbdd7288b34a2e"},{url:"stories/bora_and_the_beavers_wisdom/cantonese.json",revision:"e602f15d893c4db496792e7ef08f1c57"},{url:"stories/bora_and_the_beavers_wisdom/english.json",revision:"89495be1cdc5061831aaa4a7473704cc"},{url:"stories/bora_and_the_beavers_wisdom/french.json",revision:"8852d5bbf1b32479253f6c2976df9911"},{url:"stories/bora_and_the_beavers_wisdom/mandarin.json",revision:"545eba7c804ed5c29390cf23a7089284"},{url:"stories/bora_and_the_beavers_wisdom/spanish.json",revision:"d02eb5af8cd3d3ad0604d3de94f83245"},{url:"stories/cat_that_lost_its_hat/cantonese.json",revision:"4c1f3271dcaf71e780f88df4ee62eb68"},{url:"stories/cat_that_lost_its_hat/english.json",revision:"07150dc463b589f998349f988e11852c"},{url:"stories/cat_that_lost_its_hat/french.json",revision:"74abf1d60f675d8c7c5130dfbc210d08"},{url:"stories/cat_that_lost_its_hat/mandarin.json",revision:"6f4fce0f27a914c0f0f0dc83b3ba5538"},{url:"stories/cat_that_lost_its_hat/spanish.json",revision:"e3b5d499c017d36b8b29360ca9f2620c"},{url:"stories/from_brewed_coffee_to_bubble_tea_dreams/cantonese.json",revision:"51fe985bdb6b72371150054b408113bd"},{url:"stories/from_brewed_coffee_to_bubble_tea_dreams/english.json",revision:"6ee7442a099a242c2261f4b1b44b5935"},{url:"stories/from_brewed_coffee_to_bubble_tea_dreams/french.json",revision:"fe44236720f09900dea1074fe7aa06fd"},{url:"stories/from_brewed_coffee_to_bubble_tea_dreams/mandarin.json",revision:"4046ce87a20562b146164b64a5c5a64b"},{url:"stories/from_brewed_coffee_to_bubble_tea_dreams/spanish.json",revision:"fa154aadc3298c6b3f18ee05915c7665"},{url:"stories/pablo_the_penguins_madrid_adventure/cantonese.json",revision:"8f550f7fb9510e7e851a29b854ca2d59"},{url:"stories/pablo_the_penguins_madrid_adventure/english.json",revision:"69e7a310aa514c3c2f113a60cfb40392"},{url:"stories/pablo_the_penguins_madrid_adventure/french.json",revision:"dd79f48368f08f56f33c854902fdf677"},{url:"stories/pablo_the_penguins_madrid_adventure/mandarin.json",revision:"097e84c13d3edf78923cb7c206e9874b"},{url:"stories/pablo_the_penguins_madrid_adventure/spanish.json",revision:"741f773e8216f6b24241dbfed0ba16b3"},{url:"stories/pinky_the_surfing_pig/cantonese.json",revision:"325b8cec639f6f1fdccfd36b1dcbecb2"},{url:"stories/pinky_the_surfing_pig/english.json",revision:"77ff0e2296be4489a8e5ad9bd35948cd"},{url:"stories/pinky_the_surfing_pig/french.json",revision:"2eec872b3f95a71304ed4f92713bf731"},{url:"stories/pinky_the_surfing_pig/mandarin.json",revision:"1aebae05d0c532c78b0a64d0203da7ad"},{url:"stories/pinky_the_surfing_pig/spanish.json",revision:"bff019e50d36bf748a4c42260b8117c7"},{url:"stories/stories.json",revision:"1a7837884af14d06fb4a22284911fc3c"},{url:"stories/strings_of_destiny/cantonese.json",revision:"37b6aba41c6849152822986fbc86050a"},{url:"stories/strings_of_destiny/english.json",revision:"e908b84fa906c02d2985547484f3aef0"},{url:"stories/strings_of_destiny/french.json",revision:"8033c07e097c98bba7eb2ad206549cb7"},{url:"stories/strings_of_destiny/mandarin.json",revision:"0805a2406bc84ff980cf7b9376a6fb8e"},{url:"stories/strings_of_destiny/spanish.json",revision:"9fe9f197bf1822165c0c16e3a16ede12"},{url:"stories/the_cheese_heist/cantonese.json",revision:"50bd16c1c2cdcae59ccfe56a40fee312"},{url:"stories/the_cheese_heist/english.json",revision:"15f1923966405bf59958fa0dd6889e07"},{url:"stories/the_cheese_heist/french.json",revision:"8ab36431cb4d6bce19e7301295e7a172"},{url:"stories/the_cheese_heist/mandarin.json",revision:"5af1a791144692e8762193d6665df232"},{url:"stories/the_cheese_heist/spanish.json",revision:"778bf5d074ae3184ebceff64dfcbf440"},{url:"stories/the_red_pandas_rush/cantonese.json",revision:"4999401db5624321150ccd90fce9b214"},{url:"stories/the_red_pandas_rush/english.json",revision:"a447eb7f227768d3ce1e4b7340c7cc2d"},{url:"stories/the_red_pandas_rush/french.json",revision:"79fbaa3f9429224c277474a67e2e6b56"},{url:"stories/the_red_pandas_rush/mandarin.json",revision:"ae013187182524c1e4d448827ad59837"},{url:"stories/the_red_pandas_rush/spanish.json",revision:"78165002e9bda26c3a5c6cc2b3de7b3a"},{url:"stories/the_truth_beyond_the_bars/cantonese.json",revision:"01f1c64f06109d0d907ce11ce1de94fe"},{url:"stories/the_truth_beyond_the_bars/english.json",revision:"9ee3a00082d131723b97c28d39b2fe6f"},{url:"stories/the_truth_beyond_the_bars/french.json",revision:"1a2639d1f3b5e89fa9364436066144ea"},{url:"stories/the_truth_beyond_the_bars/mandarin.json",revision:"a1a20d825b2688a26835e029bcb3ca84"},{url:"stories/the_truth_beyond_the_bars/spanish.json",revision:"8e8a123595fb786dab44354d1f899a1d"},{url:"stories/underdog_in_the_fast_lane/cantonese.json",revision:"3247298d8b026769a1997dcba7dee7c0"},{url:"stories/underdog_in_the_fast_lane/english.json",revision:"8ddd44326f788fcda4c1c94680391075"},{url:"stories/underdog_in_the_fast_lane/french.json",revision:"23e6f323154b82a4b3813032168698cc"},{url:"stories/underdog_in_the_fast_lane/mandarin.json",revision:"1e8290aad80ba0e8ccad65ed29ca4f2f"},{url:"stories/underdog_in_the_fast_lane/spanish.json",revision:"bda05da8458b42145ea0f7c395010b90"},{url:"workbox-0ff6656d.js.map",revision:"cdd3aa47a77dfa96aa02cd835e867815"},{url:"workbox-f0913a7b.js.map",revision:"414c25235261d3faa321d8653fdb8ed4"}],{}),e.registerRoute(/^\/.*/,new e.CacheFirst({cacheName:"static-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
