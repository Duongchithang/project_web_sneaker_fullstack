<template>
  <div class="header">
    <div class="container-header bg-black text-white ">
      <div class="lg:px-4 lg:ml-16 lg:mr-16 md:px-3 md:ml-10 md:mr-10 xs:px-1 xs:mr-2 xs:ml-2 relative flex justify-between items-center">
        <span class="md:hidden lg:block xs:hidden sm:hidden absolute top-[50%] translate-y-[-50%] left-0">
          <router-link to="/login" class="text-sm font-semibold">ĐĂNG NHẬP / ĐĂNG KÍ</router-link>
        </span>
        <i
          class="
            fa-solid
            menu-icon-bar
            fa-bars
            md:block
            lg:hidden
            md:text-[30px]
            xs:text-[25px]
          "
        ></i>
        <div class="container-heading relative md:top-[50%] md:left-[5%] xs:left-[10%]  lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] ">
          <h1 class="heading-name xs:text-[30px] lg:text-4xl font-semibold tracking-widest">
           ZIN
          </h1>
          <span class="heading-title font-semibold text-base tracking-widest"
            >S N E
            <i class="fa-solid fa-star-half-stroke"></i>
            K E R
          </span>
        </div>
        <div class="container-shop items-center relative top-[50%] right-0 flex">
          <div
            class="header-search pr-4 border-r border-gray md:hidden lg:block"
          >
            <div
              class="
                around-header-search
                bg-white
                absolute
                top-[4rem]
                right-[8.5rem]
              "
            >
              <div class="container-head p-4 flex">
                <input
                  class="
                    h-[40px]
                    border-gray border-[1px]
                    outline-none
                    pl-3
                    pr-3
                    text-black
                  "
                  type="text"
                />
                <button class="h-[40px] w-11 bg-[#CB2327]">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="header-cart flex items-center ml-5 relative cursor-pointer">
            <span class="text-cart text-sm font-semibold md:hidden lg:block xs:hidden sm:hidden"
              >GIỎ HÀNG / {{ FormatPrice(TotalProduct) }}</span
            >
            <div class="container-cart">
              <i class="fa-solid icon-cart-shopping fa-cart-shopping xs:mr-[20px] md:mr-0 ml-3 md:text-[25px] xs:text-[25px]"></i>
              <span
                class="
                  cart-number
                  px-[8px]
                  py-[3px]
                  absolute
                  xs:right-[-3px]
                  xs:top-[-10px]
                  md:top-[-10px]
                  md:right-[-25px]
                  text-black text-xs
                  rounded-full
                  bg-white
                "
                >{{CountProduct}}</span
              >
            </div>
          </div>
          
          <div class="around-cart-product xs:hidden md:hidden lg:hidden top-[36px] right-0 absolute w-[300px] py-4 px-3 z-50 bg-white">
            <div class="cart-content">
              <span v-if="CountProduct == 0" class="cart-text-content text-[gray]">Chưa có sản phẩm trong giỏ hàng</span>
            </div>
            <div class="cart-list  text-[gray]">
              <div class="cart-around-item max-h-[300px] overflow-y-scroll">
                <div class="cart-item flex justify-between pb-[5px] mt-3" v-for="(product,index) in ArrayTotalProduct" :key="(product,index)">
                  <div class="cart-item-image w-[100px] h-[80px]">
                    <img class="w-full h-full object-cover" :src="product.Image_url" alt="">
                  </div>
                  <div class="cart-content-text flex flex-col  w-[100px]">
                    <span class="cart-title text-[15px] flex-wrap text-left">{{product.product_name}}</span>
                    <span class="cart-price text-[15px] text-left">1 x {{FormatPrice(product.price)}}</span>
                  </div>
                  <div  class="around-icon w-[20px] pr-[8px]">
                    <i @click="RemoveProduct({index,product:product.price})" class="close-add fa-solid fa-xmark text-[16px] cursor-pointer"></i>
                  </div>
                </div>
              </div>
              <div class="around-total flex justify-center items-center pt-3 pb-3 text-[18px] font-bold">
                <h1 class="total pr-2">Tổng phụ : {{FormatPrice(TotalProduct)}}</h1>
                <span class="number-total">{{}}</span>
              </div>
              <div class="around-btn-cart flex flex-col mt-3 text-white">
                <router-link to="/cart"><button  class="see-cart-btn w-full h-[40px] hover:bg-[#d82f34] bg-[#C30005] font-bold">XEM GIỎ HÀNG</button></router-link>
                 <button class="btn-payment w-[full] h-[40px] bg-[#8d282b] mt-2 font-bold">THANH TOÁN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        around-menu-navbar
        fixed
        z-30
        top-0
        left-0
        xs:h-[100vh]
        lg:h-[100vh]
        lg:w-[350px]
        bg-[#f2f2f2]
        translate-x-[-100%]
        lg:hidden
        md:w-[300px]
        xs:w-[200px]
      "
    >
      <div class="around-navbar-list pt-14">
        <div class="around-button-repons  flex justify-center">
          <input
            class="h-[40px] px-3 xs:w-[120px] outline-none"
            type="text"
            
            placeholder="Tìm kiếm ..."
          />
          <button class="h-[40px] px-4 xs:w-[30px] bg-[#C30005] items-center justify-center flex">
            <i class="text-white fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <ul
          class="
            menu-list-item
            mt-8
            flex flex-col
            text-[14px]
            font-bold
            text-[#7B7B7B]
          "
        >
          <li class="menu-item py-4 border-t border-[#c2bebe] ">
            <router-link to="/">TRANG CHỦ</router-link>
          </li>
          <li class="menu-item py-4 border-t border-[#c2bebe]">
            <router-link to="/intro">GIỚI THIỆU</router-link>
          </li>
          <li class="menu-item py-4 border-t border-[#c2bebe]">
            <router-link to="">NỮ</router-link>
          </li>
          <li class="menu-item py-4 border-t border-[#c2bebe]">
            <router-link to="">NAM</router-link>
          </li>
          <li class="menu-item py-4 border-t border-[#c2bebe]">
            <router-link to="children">TRẺ EM</router-link>
          </li>
          <li class="menu-item py-4 border-t border-[#c2bebe]">
            <router-link to="/other">PHỤ KIỆN KHÁC</router-link>
          </li>
          <li class="menu-item py-4 border-t border-[#c2bebe]">
            <router-link to="/news">TIN TỨC</router-link>
          </li>
          <li class="menu-item py-4 border-t border-[#c2bebe]">
            <router-link to="/contact">LIÊN HỆ</router-link>
          </li>
          <li class="menu-item py-4 border-t border-[#c2bebe]">
            <router-link to="/login">ĐĂNG NHẬP</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="
        around-overlay
        fixed
        h-[100vh]
        w-[100%]
        z-20
        top-0
        right-0
        xs:hidden
        md:hidden
        lg:hidden
      "
    >
      <div class="around-icon-close absolute xs:top-[40px] xs:right-[40px] md:top-[40px] md:right-[70px] lg:top-[30px] lg:right-[40px]">
        <i class="fa-solid fa-xmark text-[#c2bebe] xs:text-[45px] md:text-[40px] lg:text-[40px]"></i>
      </div>
    </div>
    <div class="menu-header xs:hidden sm:hidden md:hidden lg:block bg-[#DCDCDC]">
      <ul class="flex justify-center py-3 gap-x-10 font-semibold text-[16px]">
        <li class="menu-itemss active1">
          <router-link to="/">TRANG CHỦ</router-link>
        </li>
        <li class="menu-items">
          <router-link to="/intro">GIỚI THIỆU</router-link>
        </li>
        <li class="menu-items">
          <router-link to="">NỮ</router-link>
        </li>
        <li class="menu-items">
          <router-link to="">NAM</router-link>
        </li>
        <li class="menu-items">
          <router-link to="/children">TRẺ EM</router-link>
        </li>
        <li class="menu-items">
          <router-link to="/other">PHỤ KIỆN KHÁC</router-link>
        </li>
        <li class="menu-items">
          <router-link to="/news">TIN TỨC</router-link>
        </li>
        <li class="menu-items">
          <router-link to="/contact">LIÊN HỆ </router-link>
        </li>
      </ul>
    </div>
    
     <div class="around-repons-cart xs:block md:block fixed lg:hidden top-0 right-0 xs:h-[100vh] md:h-[100vh] xs:w-[250px] md:w-[350px] bg-[#F8F8F8] z-[1000000]">
            <div class="around-repons-content xs:pt-[30px] xs:px-[10px] md:pt-[50px] md:px-[16px]">
              <i class="fa-solid fa-xmark close-cart-shop xs:text-[25px] xs:top-[5xp] xs:right-[15px] md:text-[30px] fixed md:top-[20px] text-[#7F7F7F] md:right-[30px]"></i>
              <h1 class="repons-cart title text-[20px] font-semibold xs:mt-[20px] md:mt-0">GIỎ HÀNG</h1>
              <div class="md:h-[3px] md:w-[50px] absolute left-[50%] mt-3 translate-x-[-50%] bg-[#7F7F7F]"></div>
              <div class="around-repons-product-list xs:mt-[20px] md:mt-[60px] flex flex-col">
                   <div class="repons-product-item flex pb-[20px] mt-[20px]" v-for="(product,index) in ArrayTotalProduct" :key="(product,index)">
                     <div class="repons-product-img xs:w-[120px] md:w-[150px] mr-4">
                       <img class="w-full h-full object-cover" :src="product.Image_url" alt="">
                     </div>
                     <div class="repons-product-info md:w-[130px] flex flex-col justify-center">
                       <span class="repons-product-title flex-wrap text-left xs:text-[14px] md:text-[18px] font-medium">{{product.product_name}}</span>
                       <span class="repons-product-price text-left mt-[5px] xs:text-[14px] md:text-[18px] font-medium text-[#7F7F7F]">1 x {{FormatPrice(product.price)}}</span>
                     </div>
                     <i  class="close-repons fa-solid fa-circle-xmark ] md:w-[30px] text-[25px] font-medium text-[#7F7F7F]"></i>
                   </div>
                   <div class="around-repons-payment">
                     <div class="around-text-payment pt-[15px] pb-[15px]">
                       <span class="tongPhu text-[18px] font-semibold pr-[10px]">Tổng phụ:</span>
                       <span class="text-[19px] font-semibold"></span>
                     </div>
                     <div class="around-btn-payment-repons flex flex-col mt-[10px]">
                       <router-link to="/cart"><button class="w-full h-[40px] bg-[#C30005] font-semibold text-white">XEM GIỎ HÀNG</button></router-link>
                       <button class="w-full h-[40px] bg-[#C30005] font-semibold text-white mt-[10px]">THANH TOÁN</button>
                     </div>
                   </div>
                   <span  class="text-[16px] text-[#666]">Chưa có sản phẩm trong giỏ hàng</span>
              </div>
            </div>
     </div>
     <div class="modal-overlay-repons md:w-[100%] md:h-[100vh] fixed top-0 right-0 left-0 bottom-0 xs:hidden md:hidden lg:hidden  z-[100000]">

     </div>
    
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
     
    };
  },
  computed:{
    ...mapState(['TotalProduct','ArrayTotalProduct','CountProduct','ArrayMenu','ArrayMenuLink']),
  },
  methods:{
   ...mapMutations(['OnTotalProduct','RemoveProduct']),
   FormatPrice(price){
      return price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
     }
  },
  mounted() {
    var CloseCart = document.querySelector('.close-cart-shop');
    var ModalCart = document.querySelector('.modal-overlay-repons');
    var IconCart = document.querySelector('.icon-cart-shopping');
    var CartAroundPayment = document.querySelector('.around-repons-cart');
    var Body = document.body;
    var MenuBar = document.querySelector(".menu-icon-bar");
    var Navbar = document.querySelector(".around-menu-navbar");
    var Overlay = document.querySelector(".around-overlay");
    var closeNavbar = document.querySelector(".around-icon-close");
    var ShopCart = document.querySelector('.text-cart');
    var Cart = document.querySelector('.around-cart-product');
    var Scroll = document.querySelector('.cart-list');
    var check = true;
    
    IconCart.addEventListener('click', function(){
     CartAroundPayment.style.transform = 'translateX(0)'
     if(Body.offsetWidth<800){
        ModalCart.style.display = 'block';
        Body.style.overflowY = 'hidden';
     }
    
     CartAroundPayment.style.overflowY = 'scroll'
    })
    CloseCart.addEventListener('click',function(){
      CartAroundPayment.style.transform = 'translateX(200%)'
      Body.style.overflowY = 'scroll'
      ModalCart.style.display = 'none'
    });
    ShopCart.addEventListener('click',function(){
         if(check){
           Cart.style.display = 'block';
           check = false;
         }
         else{
           Cart.style.display = 'none'
           check = true;
         }
    })
    MenuBar.addEventListener("click", function () {
      Navbar.style.transform = "translateX(0)";
      Overlay.style.display = "block";
      Navbar.style.overflowY = 'scroll';
    });
    closeNavbar.addEventListener("click", function () {
      Navbar.style.transform = "translateX(-100%)";
      Overlay.style.display = "none";
    });
  },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .around-repons-cart{
    transform: translateX(200%);
    transition: all 0.5s linear;
  }
  .header{
    position: fixed;
    left:  0;
    top: 0;
    right: 0;
    z-index: 1000;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .repons-product-item{
    border-bottom : 1px solid #7F7F7F
  }
  .around-header-search::before {
    content: "";
    border: 20px solid;
    border-color: transparent transparent white transparent;
    position: absolute;
    top: -33px;
    left: 120px;
  }
  .container-head input {
    box-shadow: 0 0 1px 1px #ccc;
  }
  .around-header-search {
    box-shadow: 2px 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.25s linear;
    z-index: 100;
    display: none;
  }
  
  .menu-items {
    padding: 10px 0;
    position: relative;
  }
  .menu-itemss{
      padding: 10px 0;
    position: relative;
  }
  .menu-items::after {
    content: "";
    height: 3px;
    width: 0;
    position: absolute;
    background: #c30005;
    left: 0;
    bottom: 0px;
    transition: all 0.25s linear;
  }
  .menu-items:hover::after {
    width: 100%;
  }
  .active {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    background: #c30005;
    left: 0;
    bottom: 0px;
  }
  .around-overlay {
    background: rgba(0, 0, 0, 0.6);
  }
  .menu-item:hover {
    background: #ccc;
    color: black;
  }
  .around-icon-close i {
    transition: all 0.25s linear;
  }
  .around-icon-close i:hover {
    color: white;
  }
  .around-menu-navbar {
    transition: all 0.25s linear;
  }
  .around-overlay {
    transition: all 0.1s linear;
  }
  .active1{
    border-bottom: 3px solid #c30005;
  }
  .around-cart-product{
     box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  .around-cart-product::before{
    content: "";
    border:20px solid;
    border-color: transparent transparent white transparent;
    position: absolute;
    top: -30px;
    right: 50px;
  }
  .cart-item{
    border-bottom: 1px solid rgb(177, 173, 173);
  }
  .around-total{
    border-bottom: 1px solid rgb(177, 173, 173);
  }
  
  .loader {
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    position: absolute;
  }
  .modal-overlay-repons{
      background: rgba(0, 0, 0, 0.4);
      transition: all 0.5s linear;
  }
  .around-text-payment{
    border-bottom: 2px solid rgb(177, 173, 173);
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>