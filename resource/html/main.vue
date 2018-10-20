<div class="container">
  <div class="headline-image">
  </div>
  <section class="main-section size-boxing">
    <h1>육아 일기</h1>
    <ul>
      <li v-for="(t, index) in timePeriod" class="time-period">
        <div class="time-left">
          <a :href="t.link" class="message" v-if="index % 2">
            <span> {{t.period}} </span>
          </a>
          <div class="stem"></div>
          <div class="flowers">
            <div class="flower" v-for="f in 6"></div>
          </div>
        </div>
        <div class="time-divide">
          <div class="tree-first"></div>
          <div class="tree-second"></div>
        </div>
        <div class="time-right">
          <div class="stem"></div>
          <div class="flowers">
            <div class="flower" v-for="f in 6"></div>
          </div>
          <a :href="t.link" class="message" v-if="(index % 2)+1">
            <span> {{t.period}} </span>
          </a>
        </div>
        <!-- {{ t.text }} -->
      </li>
      <li class="time-period">
        <div class="time-left"></div>
        <div class="time-divide">
          <div class="tree-first"></div>
          <div class="tree-second"></div>
          <div class="flowers-bottom">
              <div class="flower" v-for="i in fcount">
              </div>
          </div>
        </div>
        <div class="time-right"></div>
      </li>
    </ul>
  </section>
</div>
