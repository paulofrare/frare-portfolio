<template>
  <div class="skills-container">
    <transition name="trasitionSuperior" appear>
      <div class="titulo">Skills</div>
    </transition>
    <div class="skills-section">
      <div>
        <transition-group name="trasitionEsquerdo" class="skill-front">
          <span key="1" v-if="subtitulo" class="subtituloEsquerdo">Front-End</span>
          <span key="2" v-if="text1" class="textEsquerdo">HTML / CSS</span>
          <span key="3" v-if="text2" class="textEsquerdo">JavaScript</span>
          <span key="4" v-if="text3" class="textEsquerdo">VueJS</span>
          <span key="5" v-if="text4" class="textEsquerdo">Jquery</span>
          <span key="6" v-if="text5" class="textEsquerdo">Performace Web</span>
          <span key="7" v-if="text6" class="textEsquerdo">SCSS / Sass</span>
        </transition-group>
      </div>
      <q-separator dark vertical />
      <div>
        <transition-group name="trasitionSuperior" class="skill-ux">
          <span key="8" v-if="subtitulo" class="subtitulo">UX/UI</span>
          <span key="9" v-if="text1" class="text">Design Responsivo</span>
          <span key="10" v-if="text2" class="text">Mobile Friendly</span>
          <span key="11" v-if="text3" class="text">Usabilidade</span>
          <span key="12" v-if="text4" class="text">Figma</span>
          <span key="13" v-if="text5" class="text">Prototipaçao</span>
        </transition-group>
      </div>
    </div>
    <div class="footer" mode="out-in">
      <q-separator key="1" class="separator-footer" dark />
      <div
        class="text-footer"
        key="2"
      >© 2020 Paulo Frare | Desenvolvedor Front-end & UI/UX Designer | Todos os diretos reservados</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subtitulo: false,
      text1: false,
      text2: false,
      text3: false,
      text4: false,
      text5: false,
      text6: false,
      footer: false,
    };
  },
  methods: {},
  created() {
    setTimeout(() => {
      this.subtitulo = true;
    }, 500);
    setTimeout(() => {
      this.text1 = true;
    }, 800);
    setTimeout(() => {
      this.text2 = true;
    }, 1100);
    setTimeout(() => {
      this.text3 = true;
    }, 1400);
    setTimeout(() => {
      this.text4 = true;
    }, 1700);
    setTimeout(() => {
      this.text5 = true;
    }, 2000);
    setTimeout(() => {
      this.text6 = true;
    }, 2300);
    setTimeout(() => {
      this.footer = true;
    }, 2600);
  },
};
</script>
<style scoped>
.skills-container {
  color: rgb(209, 209, 209);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 100px;
  margin-bottom: 150px;
}

.realce {
  color: #3aadf5;
}

.titulo {
  font-size: 64px;
}

.skills-section {
  margin-top: 40px;
  display: flex;
}

.skill-front {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 300px;
  margin-right: 15px;
}
.skill-ux {
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
}

.subtituloEsquerdo {
  font-size: 48px;
}
.subtitulo {
  font-size: 48px;
}
.text {
  font-size: 24px;
}
.textEsquerdo {
  font-size: 24px;
}

.trasitionSuperior-enter,
.trasitionSuperior-leave-to {
  opacity: 0;
}

.trasitionSuperior-enter-active,
.trasitionSuperior-leave-to {
  transition: opacity 1s;
}

.trasitionEsquerdo-enter,
.trasitionEsquerdo-leave-to {
  opacity: 0;
}

.trasitionEsquerdo-enter-active,
.trasitionEsquerdo-leave-to {
  transition: opacity 1s;
}
.trasition-enter,
.trasition-leave-to {
  opacity: 0;
}

.trasition-enter-active,
.trasition-leave-to {
  transition: opacity 1s;
}

.titulo {
  animation: slide 1s;
}
.subtituloEsquerdo,
.textEsquerdo {
  animation: slideEsquerdo 1s;
}
.subtitulo,
.text {
  animation: slideDireito 1s;
}

@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }

  to {
    transform: translate3d(0, 0px, 0);
  }
}
@keyframes slideEsquerdo {
  from {
    transform: translate3d(-40px, 0, 0);
  }

  to {
    transform: translate3d(0px, 0, 0);
  }
}
@keyframes slideDireito {
  from {
    transform: translate3d(40px, 0, 0);
  }

  to {
    transform: translate3d(0px, 0, 0);
  }
}

.separator-footer {
  margin: 20px;
  width: 80%;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 00;
  z-index: 1000;
  background-color: #252525;
  padding: 20px;
}

.text-footer {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .skills-section {
    flex-direction: column;
  }
  .skill-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    margin-right: 15px;
    margin-bottom: 50px;
  }
  .skill-ux {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 50px;
  }
}
</style>