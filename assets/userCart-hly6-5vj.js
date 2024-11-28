import{S as b}from"./sweetalert2.esm.all-D3pEHXw3.js";import{_ as w,a as m,c as n,b as r,d as s,p as j,k as d,F as T,r as q,w as L,t as p,e as _,v as y,f as h,o as i,g as U,n as v}from"./index-CkX0ZDcu.js";const N={data(){return{cartLists:{carts:[]},isLoading:!1,status:{LoadingItem:""},couponCode:"",finalTotal:"",user:{name:"",email:"",phone:"",address:"",message:""}}},computed:{totalAmount(){return this.cartLists.carts.reduce((o,t)=>o+t.product.price*t.qty,0)}},methods:{createOrder(){m.post("https://vue3-course-api.hexschool.io/api/tingg-api/order",{data:{user:{name:this.user.name,email:this.user.email,tel:this.user.phone,address:this.user.address},message:this.user.message}}).then(t=>{console.log(t),this.cartLists={carts:[]},this.user={name:"",email:"",phone:"",address:"",message:""},this.couponCode="",this.finalTotal="";const c=t.data.orderId;b.fire({title:"成功",text:"訂單已成功，將為您跳轉至結帳頁面",icon:"success"}).then(()=>{this.$router.push(`/user/checkout/${c}`)})})},isPhone(o){return/^(09)[0-9]{8}$/.test(o)?!0:"需要正確的電話號碼"},updateCart(o){const t=`https://vue3-course-api.hexschool.io/api/tingg-api/cart/${o.id}`;this.isLoading=!0,this.status.loadingItem=o.id;const c={product_id:o.product_id,qty:o.qty};m.put(t,{data:c}).then(x=>{console.log(x),this.isLoading=!1,this.status.loadingItem="",this.getCartList()})},getCartList(){m.get("https://vue3-course-api.hexschool.io/api/tingg-api/cart").then(t=>{console.log(t),this.cartLists=t.data.data,console.log(this.cartLists.carts)})},deleteCart(o){const t=`https://vue3-course-api.hexschool.io/api/tingg-api/cart/${o}`;m.delete(t).then(c=>{console.log(c),b.fire({title:"成功",text:"商品已成功從購物車刪除",icon:"success"}),this.getCartList()})},addCouponCode(){m.post("https://vue3-course-api.hexschool.io/api/tingg-api/coupon",{data:{code:this.couponCode}}).then(t=>{console.log(t),this.finalTotal=t.data.data.final_total,console.log(this.finalTotal),b.fire({title:"成功",text:"優惠券已成功套用",icon:"success"})})}},mounted(){this.isLoading=!0,setTimeout(()=>{this.getCartList(),this.isLoading=!1},1e3)}},F={class:"container"},I={key:0,class:"row justify-content-center"},S={key:1,class:"table-responsive"},E={class:"table table-striped table-success bg-color"},B={class:"mt-2"},M={class:"d-none d-md-table-cell bg-color"},$=["src"],A={class:"bg-color"},D={class:"justify-content-center"},O={class:"bg-color"},P={class:"input-group input-group-sm"},z=["onUpdate:modelValue","onChange"],G={class:"input-group-text"},H={class:"bg-color"},J={class:"d-flex justify-content-start"},K={class:"bg-color"},Q={class:"justify-content-center align-items-center"},R={class:"bg-color"},W=["onClick"],X={key:2,class:"text-center my-5"},Y={key:3,class:"text-end"},Z={key:4},tt={key:5,class:"text-end text-success"},st={key:6,class:"input-group"},et={key:7,class:"my-5"},ot={class:"row justify-content-center"},lt={class:"col-md-6"},at={class:"form-group"},nt={class:"form-group"},it={class:"form-group"},rt={class:"form-group"},dt={class:"form-group"};function ct(o,t,c,x,l,u){const C=h("Loading"),V=h("router-link"),g=h("VField"),f=h("ErrorMessage"),k=h("VForm");return i(),n("div",F,[r(C,{active:l.isLoading,width:"2000",loader:"bars",color:"#e9e9d7"},null,8,["active"]),t[19]||(t[19]=s("h2",{class:"mt-2 text-center"},"購物車清單",-1)),t[20]||(t[20]=s("hr",null,null,-1)),this.cartLists.carts.length?(i(),n("div",I,t[7]||(t[7]=[j('<div class="col-md-9" data-v-a1a4c32c><div class="container mb-3" data-v-a1a4c32c><div class="row justify-content-between" data-v-a1a4c32c><div class="col-md-3 justify-content-center rounded-pill alert-success text-center d-flex justify-content-center align-items-center py-2 my-2" data-v-a1a4c32c> 1.填寫訂購資料 </div><div class="col-md-3 rounded-pill alert-secondary d-flex justify-content-center align-items-center text-center py-2 my-2" data-v-a1a4c32c> 2.金流付款 </div><div class="col-md-3 rounded-pill d-flex justify-content-center align-items-center alert-secondary text-center py-2 my-2" data-v-a1a4c32c> 3.訂單完成 </div></div></div></div>',1)]))):d("",!0),this.cartLists.carts.length?(i(),n("div",S,[s("table",E,[t[8]||(t[8]=s("thead",null,[s("tr",null,[s("th",{class:"d-none d-md-table-cell"},[s("h5",null,"商品圖片")]),s("th",null,[s("h5",null,"商品名稱")]),s("th",null,[s("h5",null,"數量")]),s("th",null,[s("h5",null,"單價")]),s("th",null,[s("h5",null,"總價格")]),s("th",null,[s("h5",null,"刪除")])])],-1)),s("tbody",B,[(i(!0),n(T,null,q(l.cartLists.carts,e=>(i(),n("tr",{key:e.id,class:"align-middle bg-color"},[s("td",M,[s("img",{src:e.product.imageUrl,alt:"商品圖片",class:"img-fluid bg-color",style:{width:"150px",height:"auto","object-fit":"contain"}},null,8,$)]),s("td",A,[s("p",D,p(e.product.title),1)]),s("td",O,[s("div",P,[_(s("input",{type:"number",min:"1",class:"form-control","onUpdate:modelValue":a=>e.qty=a,onChange:a=>u.updateCart(e)},null,40,z),[[y,e.qty]]),s("div",G,p(e.product.unit),1)])]),s("td",H,[s("p",J," $NT"+p(e.product.price),1)]),s("td",K,[s("p",Q,p(e.product.price*e.qty),1)]),s("td",R,[s("button",{class:"btn-close",onClick:a=>u.deleteCart(e.id)},null,8,W)])]))),128))])])])):d("",!0),this.cartLists.carts.length?d("",!0):(i(),n("div",X,[t[10]||(t[10]=s("h3",{class:"text-muted"},"購物車是空的",-1)),t[11]||(t[11]=s("p",null,"快去選購您喜歡的商品吧！",-1)),r(V,{to:"/user/product",class:"btn btn-outline-secondary"},{default:L(()=>t[9]||(t[9]=[U(" 前往商品頁 ")])),_:1})])),this.cartLists.carts.length?(i(),n("h5",Y," 總計:"+p(u.totalAmount),1)):d("",!0),this.cartLists.carts.length?(i(),n("hr",Z)):d("",!0),this.finalTotal?(i(),n("h5",tt," 折扣價:"+p(this.finalTotal),1)):d("",!0),this.cartLists.carts.length?(i(),n("div",st,[this.cartLists.carts.length?_((i(),n("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>l.couponCode=e)},null,512)),[[y,l.couponCode]]):d("",!0),s("button",{class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=e=>u.addCouponCode())}," 套用優惠券 ")])):d("",!0),this.cartLists.carts.length?(i(),n("div",et,[t[18]||(t[18]=s("h4",{class:"text-center fw-bold"},"訂單資料",-1)),s("div",ot,[s("div",lt,[r(k,{onSubmit:u.createOrder},{default:L(({errors:e})=>[s("div",at,[t[12]||(t[12]=s("label",{class:"form-label"},"姓名",-1)),r(g,{name:"姓名",modelValue:l.user.name,"onUpdate:modelValue":t[2]||(t[2]=a=>l.user.name=a),rules:"required",class:v(["form-control",{"is-invalid":e.姓名}]),placeholder:"請輸入姓名"},null,8,["modelValue","class"]),r(f,{name:"姓名",class:"invalid-feedback"})]),s("div",nt,[t[13]||(t[13]=s("label",{class:"form-label"},"Email",-1)),r(g,{name:"email",modelValue:l.user.email,"onUpdate:modelValue":t[3]||(t[3]=a=>l.user.email=a),rules:"email|required",type:"email",class:v(["form-control",{"is-invalid":e.email}]),placeholder:"請輸入Email"},null,8,["modelValue","class"]),r(f,{name:"email",class:"invalid-feedback"})]),s("div",it,[t[14]||(t[14]=s("label",{class:"form-label"},"電話號碼",-1)),r(g,{name:"phone",modelValue:l.user.phone,"onUpdate:modelValue":t[4]||(t[4]=a=>l.user.phone=a),rules:u.isPhone,type:"text",class:v(["form-control",{"is-invalid":e.phone}]),placeholder:"請輸入電話號碼"},null,8,["modelValue","rules","class"]),r(f,{name:"phone",class:"invalid-feedback"})]),s("div",rt,[t[15]||(t[15]=s("label",{class:"form-label"},"地址",-1)),r(g,{name:"地址",modelValue:l.user.address,"onUpdate:modelValue":t[5]||(t[5]=a=>l.user.address=a),rules:"required",type:"text",class:v(["form-control",{"is-invalid":e.地址}]),placeholder:"請輸入地址"},null,8,["modelValue","class"]),r(f,{name:"地址",class:"invalid-feedback"})]),s("div",dt,[t[16]||(t[16]=s("label",{class:"form-label"},"留言給我們",-1)),_(s("textarea",{"onUpdate:modelValue":t[6]||(t[6]=a=>l.user.message=a),class:"form-control",cols:"30",rows:"10"},null,512),[[y,l.user.message]])]),t[17]||(t[17]=s("button",{class:"btn text-white bg-secondary d-block mt-2 ms-auto"}," 結帳 ",-1))]),_:1},8,["onSubmit"])])])])):d("",!0)])}const mt=w(N,[["render",ct],["__scopeId","data-v-a1a4c32c"]]);export{mt as default};