<template>
  <div>
    <div class="home-container">
      <transition name="trasitionSuperior">
        <div v-if="showTitulo" class="titulo">
          <span class="titulo-menor">Olá, eu me chamo</span>
          <br />Paulo Frare.
        </div>
      </transition>
      <transition name="trasitionSuperior">
        <div v-if="showText" class="text">
          Sou um desenvolvedor
          <span class="realce">front-end</span>, e aspirante a
          <span class="realce">UX/UI Designer</span>.
          Aficionado por
          <span class="realce">tecnologia</span> e buscando ser um ninja
          <span class="realce">JavaScript</span>.
        </div>
      </transition>
      <transition name="trasitionInferior">
        <q-separator v-if="separator" class="separator" dark />
      </transition>
      <transition name="trasitionInferior">
        <div v-if="divisor" class="divisor-home"></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTitulo: false,
      showText: false,
      separator: false,
      divisor: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showTitulo = true;
    }, 500);
    setTimeout(() => {
      this.showText = true;
    }, 1000);
    setTimeout(() => {
      this.separator = true;
    }, 1500);
    setTimeout(() => {
      this.divisor = true;
    }, 2000);
  },
};
</script>
<style scoped>
.home-container {
  margin-top: 200px !important;
  color: rgb(209, 209, 209);
  line-height: 1.2;
  max-width: 1000px;
  margin: 0 auto;
}

.titulo {
  font-size: 4.5rem;
  line-height: 1.2;
}

.titulo-menor {
  font-size: 4rem;
}

.text {
  margin-top: 24px;
  font-size: 2rem;
  font-weight: 100;
}

.realce {
  color: #3aadf5;
}

.separator {
  margin-top: 15px;
  max-width: 70%;
  animation: slideInferior 1s;
}

.trasitionSuperior-enter,
.trasitionSuperior-leave-to {
  opacity: 0;
}

.trasitionSuperior-enter-active,
.trasitionSuperior-leave-to {
  transition: opacity 1s;
}

.titulo,
.text {
  animation: slideSuperior 1s;
}

@keyframes slideSuperior {
  from {
    transform: translate3d(0, -20px, 0);
  }

  to {
    transform: translate3d(0, 0px, 0);
  }
}
@keyframes slideInferior {
  from {
    transform: translate3d(0, 20px, 0);
  }

  to {
    transform: translate3d(0, 0px, 0);
  }
}

.divisor-home {
  content: "";
  display: block;
  width: 100%;
  position: fixed;
  height: 100px;
  bottom: 0px;
  background-color: #1e1e1f;
  -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 0);
  clip-path: polygon(0 100%, 100% 100%, 100% 0);
  z-index: -1000;
  animation: slideInferior 1s;
}
</style>