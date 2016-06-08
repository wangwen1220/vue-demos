<template>
  <div id="app">
    <div id="etiket_div" class="wrapper-2">
      <div class="car_num_bg">
        <div class="car_num">中港通</div>
      </div>
      <div class="cont">
        <div class="date_time">
          <div class="date">
            <span class="date_d"></span>
            <span class="pl40 time_d"></span>
          </div>
          <div class="random">请查收中港通购票成功短信</br>
          凭&emsp;<b>短信</b>&ensp;及&ensp;<b>有效身份证件</b></br>
          提前到换票处取<b>纸质票</b>乘车
          <i class='package_version'></i>
          </div>
          <div class="num hide">
            <span></span>
          </div>

          <div id="driver_type" class="mobile">
            <!-- 此处为 -->
            <div class="mobile-title">乘客电话：</div>
            <div class="mobile-con"><span class="m_num"><a href="#"  id=user_mobile class="tel_color"></a></span></div>
          </div>
          <div class="mobile-wrap">
            <div class="mobile-title">咨询电话：</div>
            <div class="mobile-con server_mobile">
              <span><a tel-href="tel:4008822322" class="tel_color tel_href">4008822322</a>(国内)</span>
              <span><a tel-href="tel:200303030" class="tel_color tel_href">200303030</a>(香港)</span>
            </div>
          </div>
          <div class="date_bg"></div>
        <img src="" alt="" class="active-btn"></div>
      </div>
      <button class="help">乘车指南</button>
      <div class="empty">&nbsp;</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
@import '../main.css';

body {
  font-family: Helvetica, sans-serif;
}
</style>