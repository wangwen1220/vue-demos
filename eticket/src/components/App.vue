<template>
  <div id="app">
    <div id="etiket_div" class="wrapper">
      <div class="car_num_bg">
        <div class="car_num"></div>
      </div>
      <div class="cont">
        <div class="date_time">
          <div class="date">
            <span class="date_d"></span>
            <span class="pl40 time_d"></span>
          </div>
          <div class="random">
          <span></span>
          <i class='package_version'></i>
          </div>
          <div class="num hide">
            <span></span>
          </div>
          <div id="code">
            验票码
            <span class="m_num">XXXX</span>
          </div>
          <div id="pass_type" class="mobile">
            手机号
            <div class="canvas-wrap" id='canvas-wrap'>
              <span class="m_num"></span>
              <canvas id="canvas" ></canvas>
            </div>
          </div>
          <div id="driver_type" class="mobile">
            <!-- 此处为 -->
            乘客手机号
            <span class="m_num">XXX-XXXX-XXXX</span>
          </div>
          <div class="date_bg"></div>
        <img src="" alt="" class="active-btn"></div>
      </div>
      <div class="car-bg">
        <div class="car-icon">
        <img src="" alt="" class="active-move"></div>
      </div>
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