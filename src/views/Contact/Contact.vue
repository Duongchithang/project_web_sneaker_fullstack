<template>
  <div class="contact">
      <Header class="Header-Contact"/>
      <div class="around-contact ">
           <div class="intro-banner relative w-full h-[200px]">
             <div class="container-banner-img w-full h-full">
                 <img class="w-full h-full object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/banner-1.jpg  " alt="">
             </div>
             <div class="container-banner-content absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                 <h1 class="heading-intro xs:text-[20px] md:text-[30px] text-white font-medium">GIỚI THIỆU</h1>
                 <div class="container-router xs:text-[16px] md:text-[20px] text-white pt-4 ">
                    <router-link class="Home text-[#FAFAFA]" to="/">TRANG CHỦ</router-link> /
                    <router-link class="Intro text-white font-medium" to="/intro">LIÊN HỆ</router-link>
                 </div>
             </div>
         </div>
         <div class="around-input-contact xs:flex-wrap md:flex-nowrap xs:mt-[50px] flex  md:justify-between md:mt-[65px] mb-[55px] lg:px-4 lg:ml-16 lg:mr-16 md:px-3 md:ml-10 md:mr-10 xs:px-1 xs:mr-2 xs:ml-2">
             <div class="container-contact-info">
                 <h1 class="info-contact xs: md:text-[20px] text-[#C30005] font-semibold text-left lg:">THÔNG TIN LIÊN HỆ</h1>
                 <ul class="info-contact-list flex text-left xs:mt-[10px] md:mt-[20px] flex-col xs:gap-y-[5px] md:gap-y-[15px]">
                     <li class="text-[#353535]">
                         <i class="fa-solid fa-location-dot xs:text-[14px] xs:pr-[10px] md:text-[20px] md:pr-[14px]"></i>
                         <span class="xs:text-[15px] md:text-[18px]">Vinh An, Phu Vang, Thua Thien Hue</span>
                     </li>
                     <li class="text-[#353535]">
                        <i class="fa-solid fa-envelope xs:text-[14px] xs:pr-[10px] md:text-[20px] md:pr-[14px]"></i>
                         <span class="xs:text-[15px] md:text-[18px]">Chithang0210@gmail.com</span>
                     </li>
                     <li class="text-[#353535]">
                        <i class="fa-solid fa-square-phone xs:text-[14px] xs:pr-[10px] md:text-[20px] md:pr-[14px]"></i>
                         <span class="xs:text-[15px] md:text-[18px]">0373728***</span>
                     </li>
                 </ul>
                 <ul class="flex gap-x-[20px] mt-[20px]">
                     <li>
                         <i class="fa-brands fa-facebook-f text-[20px]"></i>
                     </li>
                      <li>
                       <i class="fa-brands fa-instagram text-[20px]"></i>
                     </li>
                      <li>
                        <i class="fa-brands fa-twitter text-[20px]"></i>
                     </li>
                      <li>
                        <i class="fa-brands fa-skype text-[20px]"></i>
                     </li>
                 </ul>
             </div>
             <div class="around-input-group xs:w-full lg:w-[50%] md:flex-col md:flex md:items-end xs:mt-[30px] md:mt-[0px]">
                 <div class="input-list grid xs:grid-cols-1 xs:grid-rows-4 xs:gap-y-[10px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[10px] lg:gap-y-[10px]">
                     <div class="input-item flex flex-col">
                         <input v-model="CheckInput.InputName" class="input-name xs:w-full xs:h-[35px] xs md:w-[280px] md:h-[40px]" type="text" placeholder="Họ và tên">
                         <span class="text-[14px] text-left">{{Error.InputName}}</span>
                     </div>
                   
                     <div class="input-item flex flex-col">
                         <input v-model="CheckInput.InputEmail" class="input-email xs:w-full xs:h-[35px] xs md:w-[280px] md:h-[40px]" type="text" placeholder="Email">
                         <span class=" ext-[14px] text-left">{{Error.InputEmail}}</span>
                     </div>
                  
                     <div class="input-item flex flex-col">
                         <input v-model="CheckInput.InputPhoneNumber" class="input-number xs:w-full xs:h-[35px] xs md:w-[280px] md:h-[40px]" type="text" placeholder="Số điện thoại">
                         <span class="text-[14px] text-left">{{Error.InputPhoneNumber}}</span>
                     </div>
                     <div class="input-item flex flex-col">
                         <input v-model="CheckInput.InputAddress" class="input-address xs:w-full xs:h-[35px] xs md:w-[280px] md:h-[40px]" type="text" placeholder="Địa chỉ">
                         <span class="text-[14px] text-left">{{Error.InputAddress}}</span>
                     </div>
                     
                 </div>
                   
                         <textarea v-model="CheckInput.InputMessage" class="input-big-text pt-2 pl-4 mt-[10px] xs:w-full md:w-[280px] lg:w-full outline-none" name="" id="" cols="" rows="5" placeholder="Lời nhắn"></textarea>
                        <h1 class="textarea w-full text-left">{{Error.InputMessage}}</h1>
        
                    <button @click="Save" class="btn-send mt-[10px] h-[38px] font-semibold text-white xs:w-[250px] md:w-[150px] lg:w-[250px] bg-[#C30005]">GỬI</button>
             </div>
        
         </div>
         <div class="around-map">
             <img src="https://www.w3schools.com/w3images/map.jpg" alt="">
         </div>
      </div>
      <Footer/>
      <Loader class="load"/>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Loader from '../../components/Loader.vue'
export default {
  components:{
      Header, Footer ,Loader
  },
  data(){
    return{
        Checksuccess : true,
        CheckInput :{
            InputName : '',
            InputEmail : '',
            InputPhoneNumber : '',
            InputAddress : '',
            InputMessage: ''
        },
        Error:{
            InputName : '',
            InputEmail : '',
            InputPhoneNumber : '',
            InputAddress : '',
            InputMessage: ''
        }
    }
  },
  methods:{
    showAlert() {
        this.$swal('Cảm ơn bạn đã liên lạc với chúng tôi!');
    },
    Validate(){
        this.Error = {
            InputName : '',
            InputEmail : '',
            InputPhoneNumber : '',
            InputAddress : '',
            InputMessage: ''
        }
        if(!this.CheckInput.InputName){
            this.Error.InputName = 'Name is required'
            this.Checksuccess = false
        }
        if(!this.CheckInput.InputEmail){
            this.Error.InputEmail = 'Email is required'
            this.Checksuccess = false
        }
        if(!this.CheckInput.InputAddress){
            this.Error.InputAddress = 'Address is required'
            this.Checksuccess = false
        }
        if(!this.CheckInput.InputPhoneNumber){
            this.Error.InputPhoneNumber = 'Phone number is required'
            this.Checksuccess = false
        }
        if(!this.CheckInput.InputMessage){
            this.Error.InputMessage = 'Message is required'
            this.Checksuccess = false
        }
        if(this.CheckInput.InputMessage && this.CheckInput.InputEmail && this.CheckInput.InputAddress && this.CheckInput.InputName && this.CheckInput.InputPhoneNumber){
            this.Checksuccess = true;
        }
    },
     Save(){
        this.Validate();
        if(this.Checksuccess){
            this.showAlert();
        }
     }
  },
  mounted(){
       var load = document.querySelector('.load')
     setTimeout(function(){
         load.style.display = 'none';
     },1000);
  
     var HeaderContact = document.querySelector('.Header-Contact');
     var AroundContact = document.querySelector('.around-contact');
     AroundContact.style.marginTop = `${HeaderContact.clientHeight}px` 
  }
}
</script>
   
<style scoped>
    .input-list{
        width: 100%;
    }
    .input-item{
        width: 100%;
    }
    input{
        width: 100%;
    }
    .input-item input{
        outline: none;
        border : 1px solid #DDDDDD;
        padding-left: 15px;
    }
    .input-big-text{
        border : 1px solid #DDDDDD;
    }
     .success{
      color:green;
  }
  .error{
      color: red;
  }
  .input-item span,
  .textarea
  {
    color: red;
  }
  .around-map{
    height: 400px;
  }
  .around-map img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>