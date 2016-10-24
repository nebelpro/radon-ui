webpackJsonp([12,31],{2:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.Mark=void 0;var d=c(7),e=function(g){return g&&g.__esModule?g:{default:g}}(d);b.Mark=e.default},3:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(e){var f=document.createElement('div');return f.innerHTML=e,f.innerText||f.textContent};b.default={data:function(){return{mark:''}},ready:function(){this.mark=window.marked(c(this.$el.getElementsByClassName('ex-mark-text')[0].innerHTML))}}},4:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n','',{version:3,sources:['/./docs/views/mark.vue'],names:[],mappings:';AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,cAAc;CACjB;AACD;IACI,UAAU;CACb;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,6EAA6E;IAC7E,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,2BAA2B;IAC3B,aAAa;IACb,iCAAiC;CACpC;AACD;IACI,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,iCAAiC;CACpC;AACD;IACI;QACI,UAAU;KACb;CACJ',file:'mark.vue',sourcesContent:['\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n'],sourceRoot:'webpack://'}])},5:function(a,b,c){var d=c(4);'string'==typeof d&&(d=[[a.id,d,'']]);var e=c(10)(d,{});d.locals&&(a.exports=d.locals)},6:function(a,b){a.exports='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class="marked">\n    <div>\n        {{{mark}}}\n    </div>\n    <slot></slot>\n</div>\n'},7:function(a,b,c){var d,e;c(5),d=c(3),d&&d.__esModule&&1<Object.keys(d).length&&console.warn('[vue-loader] docs/views/mark.vue: named exports in *.vue files are ignored.'),e=c(6),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default),e&&(('function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=e)},347:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2),e=c(8),f={0:{state:'loading',tip:'loading?!'},1:{state:'failed',tip:'该用户名已被使用'},2:{state:'success',tip:'该用户名似乎没有被使用'},3:{state:'info',tip:'该用户名已被使用'},4:{state:'warning',tip:'该用户名已被使用'}};b.default={data:function(){return{textArea:{value:'',minHeight:100,autoResize:!0,lineHeight:14,input:function(){console.log('textarea is inputing')},change:function(){console.log('textarea is changed')}},limits:{length:{type:'Length',min:6,max:12},email:{type:'Email',tip:'please input avavilable E-mail address'},phone:{type:'Phone'},number:{type:'Number',decimal:2}},form:{bio:{value:'',placeHolder:' 6 < length < 12',title:'用户名:',key:'user',state:'default',tip:''},email:{value:'',placeHolder:'Email',title:'用户名:',key:'user',state:'default',tip:''},phone:{value:'',placeHolder:'Phone Number',title:'用户名:',key:'user',state:'default',tip:''},number:{value:'',placeHolder:'Number',key:'user',state:'default',tip:''},username:{value:'',placeHolder:'input here',title:'用户名:',key:'user',state:'default',tip:''},password:{value:'',placeHolder:'',state:'default',tip:''},info:{value:'',placeHolder:'info',state:'info',tip:''},warning:{value:'',placeHolder:'warning',state:'warning',tip:''},failed:{value:'',placeHolder:'failed',state:'failed',tip:''},success:{value:'',placeHolder:'success',state:'success',tip:''},inline:{value:'',placeHolder:'我是inline的input',state:'',tip:'',inline:!0},textArea:{value:'',title:'用户名:',state:'default',minHeight:100,autoResize:!0,lineHeight:14}}}},components:{rdText:e.rdText,rdTextarea:e.rdTextarea,Mark:d.Mark},methods:{blurAction:function(){console.log('blur')},userInputing:function(h){var j=this;this.form.username.state='loading',setTimeout(function(){var k=Math.floor(4.9*Math.random());j.form.username.state=f[k].state,j.form.username.tip=f[k].tip},500)},userInputed:function(){console.log('?'),this.$Notification.success('你输入了'+this.form.username.value,'',5000)}}}},596:function(a,b){a.exports='\n<div class="ex-content">\n    <div class="ex-card">\n    <mark>\n        <textarea class="ex-mark-text">\n# Textfield 输入框\n\n最常用的表单内容输入框，内置了多种状态的设置和数据类型验证功能。\n### 示例\n        </textarea>\n    </mark>\n    <h4>输入测试</h4>\n    <p>\n        <rd-text :textfield="form.username" @inputing="userInputing" @changing="userInputed"></rd-text>\n    </p>\n    <h4>状态</h4>\n    <p>\n        <rd-text :textfield="form.info" @blur="blurAction"></rd-text>\n    </p>\n    <p>\n        <rd-text :textfield="form.warning"></rd-text>\n    </p>\n    <p>\n        <rd-text :textfield="form.success"></rd-text>\n    </p>\n    <p>\n        <rd-text :textfield="form.failed"></rd-text>\n    </p>\n    <h4>密码类型</h4>\n    <p>\n        <rd-text :textfield="form.password" type="password"></rd-text>\n    </p>\n    <h4>数据验证</h4>\n    <p>\n        <rd-text :textfield="form.bio" :limit="limits.length"></rd-text>\n    </p>\n    <p>\n        <rd-text :textfield="form.email" :limit="limits.email"></rd-text>\n    </p>\n    <p>\n        <rd-text :textfield="form.phone" :limit="limits.phone"></rd-text>\n    </p>\n    <p>\n        <rd-text :textfield="form.number" :limit="limits.number"></rd-text>\n    </p>\n    <h4>行内输入框</h4>\n    <p>\n        <rd-text :textfield="form.inline"></rd-text>\n    </p>\n    <h4>多行输入框</h4>\n    <p>\n        <rd-textarea \n            :textfield="form.textArea"\n        ></rd-textarea>\n    </p>\n    <mark>\n        <textarea class="ex-mark-text">\n## API\n\n### textfield : Object\n输入框的基础对象\n```\n<template>\n    <rd-text :textfield="user"></rd-text>   \n</template>\nuser: {\n    // value 值 :String\n    value: \'\',\n    // placeHolder :String\n    placeHolder: \'input here\',\n    // 输入框状态 :String\n    state: \'default\', // [\'warning\', \'failed\', \'info\', \'success\']\n    // 输入框提示文字 :String \n    tip: \'\' \n}\n```\n### inputing : Function\n输入框 oninput hook\n```html\n<rd-text :textfield="obj" @inputing="Inputing" ></rd-text>\n\nmethods: {\n    Inputing () {\n        console.log(\'is inputing\')\n    }\n}\n```\n### changing : Function\n输入框 onchange hook\n```\n<rd-text :textfield="obj" @changing="userInputed"></rd-text>\n\nmethods: {\n    userInputed () {\n        console.log(\'is changed\')\n    }\n}\n```\n\n### type : String\ninput type\n```\n<rd-text :textfield="form.pass" @inputing="passInputing" type="password"></rd-text>\n```\n## 验证\n\n```\n\n<rd-text :textfield="form.bio" :limit="limits.length"></rd-text>\n\n\n<rd-text :textfield="form.email" :limit="limits.email"></rd-text>\n\n\n<rd-text :textfield="form.phone" :limit="limits.phone"></rd-text>\n\n\n<rd-text :textfield="form.number" :limit="limits.number"></rd-text>\n\n\n```\n\n```\nlimits: {\n    length: {\n        type: \'Length\',\n        min: 6,\n        max: 12\n    },\n    email: {\n        type: \'Email\'\n    },\n    phone: {\n        type: \'Phone\'\n    },\n    number: {\n        type: \'Number\'\n    }\n}\n```\n\n## 完整示例代码\n```javascript\nexport default {\n    template: \'<rd-text :textfield="form.user" :input="userInputing"></rd-text>\'\n    data () {\n        return {\n            form: {\n                user: {\n                    value: \'\',\n                    placeHolder: \'input here\',\n                    title: \'用户名:\',\n                    state: \'default\',\n                    tip: \'\'\n                }\n            }\n        }\n    },\n    components: {\n        rdText,\n    },\n    methods: {\n        userInputing () {\n            this.form.user.state = \'loading\'\n            setTimeout(() => {\n                let i = Math.floor(Math.random() * 4.9)\n                this.form.user.state = MAP[i].state\n                this.form.user.tip = MAP[i].tip\n            }, 500)\n        }\n    }\n}\n```\n## textarea\n\n```html\n<rd-textarea \n    :textfield="form.textArea"\n></rd-textarea>\n\n```\n```javascript\n textArea: {\n    value: \'\',\n    minHeight: 100,\n    autoResize: true,\n    lineHeight: 14,\n    input () {\n        console.log(\'textarea is inputing\')\n    },\n    change () {\n        console.log(\'textarea is changed\')\n    }\n},\n\n```\n        </textarea>\n    </mark>\n    </div>\n</div>\n'},630:function(a,b,c){var d,e;d=c(347),d&&d.__esModule&&1<Object.keys(d).length&&console.warn('[vue-loader] docs/views/form/textfield.vue: named exports in *.vue files are ignored.'),e=c(596),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default),e&&(('function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=e)}});