webpackJsonp([4],{"8Atv":function(s,t){},PaqO:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("34+y");var i=a("X+yh"),n=a.n(i),o=(a("OgVB"),a("/Lyv")),r=a.n(o),e=a("Dd8w"),c=a.n(e),_=a("NYxO"),l={components:{HeaderTop:a("3Zko").a},computed:c()({},Object(_.d)(["userMsg"])),methods:{logOut:function(){var s=this;r.a.confirm("是否退出当前账号？").then(function(t){s.$store.dispatch("loginOut"),n()("退出成功！")},function(s){n()("退出取消！")})}}},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("section",{staticClass:"profile"},[a("HeaderTop",{attrs:{title:"我的"}}),s._v(" "),a("section",{staticClass:"profile-number"},[a("router-link",{staticClass:"profile-link",attrs:{to:s.userMsg._id?"/userMsg":"/login"}},[a("div",{staticClass:"profile_image"},[a("i",{staticClass:"iconfont icon-person"})]),s._v(" "),a("div",{staticClass:"user-info"},[s.userMsg.phone?s._e():a("p",{staticClass:"user-info-top",domProps:{textContent:s._s(s.userMsg.name||"登录/注册")}}),s._v(" "),a("p",[a("span",{staticClass:"user-icon"},[a("i",{staticClass:"iconfont icon-shouji icon-mobile"})]),s._v(" "),a("span",{staticClass:"icon-mobile-number",domProps:{textContent:s._s(s.userMsg.phone||"暂无绑定手机号")}})])]),s._v(" "),a("span",{staticClass:"arrow"},[a("i",{staticClass:"iconfont icon-jiantou1"})])])],1),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s.userMsg._id?a("section",{staticClass:"profile_my_order border-1px"},[a("mt-button",{staticClass:"logout",attrs:{type:"danger"},on:{click:s.logOut}},[s._v("退出登录")])],1):s._e()],1)])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"profile_info_data border-1px"},[a("ul",{staticClass:"info_data_list"},[a("a",{staticClass:"info_data_link",attrs:{href:"javascript:"}},[a("span",{staticClass:"info_data_top"},[a("span",[s._v("0.00")]),s._v("元\n          ")]),s._v(" "),a("span",{staticClass:"info_data_bottom"},[s._v("我的余额")])]),s._v(" "),a("a",{staticClass:"info_data_link",attrs:{href:"javascript:"}},[a("span",{staticClass:"info_data_top"},[a("span",[s._v("0")]),s._v("个\n          ")]),s._v(" "),a("span",{staticClass:"info_data_bottom"},[s._v("我的优惠")])]),s._v(" "),a("a",{staticClass:"info_data_link",attrs:{href:"javascript:"}},[a("span",{staticClass:"info_data_top"},[a("span",[s._v("0")]),s._v("分\n          ")]),s._v(" "),a("span",{staticClass:"info_data_bottom"},[s._v("我的积分")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"profile_my_order border-1px"},[a("a",{staticClass:"my_order",attrs:{href:"javascript:"}},[a("span",[a("i",{staticClass:"iconfont icon-order-s"})]),s._v(" "),a("div",{staticClass:"my_order_div"},[a("span",[s._v("我的订单")]),s._v(" "),a("span",{staticClass:"my_order_icon"},[a("i",{staticClass:"iconfont icon-jiantou1"})])])]),s._v(" "),a("a",{staticClass:"my_order",attrs:{href:"javascript:"}},[a("span",[a("i",{staticClass:"iconfont icon-jifen"})]),s._v(" "),a("div",{staticClass:"my_order_div"},[a("span",[s._v("积分商城")]),s._v(" "),a("span",{staticClass:"my_order_icon"},[a("i",{staticClass:"iconfont icon-jiantou1"})])])]),s._v(" "),a("a",{staticClass:"my_order",attrs:{href:"javascript:"}},[a("span",[a("i",{staticClass:"iconfont icon-vip"})]),s._v(" "),a("div",{staticClass:"my_order_div"},[a("span",[s._v("Vue外卖会员卡")]),s._v(" "),a("span",{staticClass:"my_order_icon"},[a("i",{staticClass:"iconfont icon-jiantou1"})])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("section",{staticClass:"profile_my_order border-1px"},[t("a",{staticClass:"my_order",attrs:{href:"javascript:"}},[t("span",[t("i",{staticClass:"iconfont icon-fuwu"})]),this._v(" "),t("div",{staticClass:"my_order_div"},[t("span",[this._v("服务中心")]),this._v(" "),t("span",{staticClass:"my_order_icon"},[t("i",{staticClass:"iconfont icon-jiantou1"})])])])])}]};var p=a("VU/8")(l,v,!1,function(s){a("8Atv")},null,null);t.default=p.exports}});
//# sourceMappingURL=4.43a53db1fee8147b13b8.js.map