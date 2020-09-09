<template>
  <div>
    <div class="contato-container">
      <transition name="trasitionSuperior">
        <div v-if="contato" class="contato">Contato</div>
      </transition>
      <transition name="trasitionSuperior">
        <div v-if="emailLabel" class="email-label">Envie um e-mail para</div>
      </transition>
      <transition name="trasitionSuperior">
        <div v-if="email" class="email">pfrare.tads@gmail.com</div>
      </transition>
      <transition name="trasitionSuperior">
        <div v-if="redesLabel" class="redes-label">Ou siga nas redes sociais</div>
      </transition>
      <transition name="trasitionSuperior">
        <div v-if="img" class="redes">
          <img class="redes-item" src="../assets/git.png" alt="Github" />
          <img class="redes-item" src="../assets/linkedin.png" alt="Linkedin" />
          <img class="redes-item" src="../assets/insta.png" alt="Intagram" />
          <img class="redes-item" src="../assets/face.png" alt="Facebook" />
          <img class="redes-item" src="../assets/whatsapp.png" alt="Whatsapp" />
          <img class="redes-item" src="../assets/telegram.png" alt="Telegram" />
        </div>
      </transition>
      <div class="footer" mode="out-in">
        <q-separator key="1" class="separator-footer" dark />
        <div
          key="2"
        >© 2020 Paulo Frare | Desenvolvedor Front-end & UI/UX Designer | Todos os diretos reservados</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contato: false,
      emailLabel: false,
      email: false,
      redesLabel: false,
      img: false,
    };
  },
  created() {
    setTimeout(() => {
      this.contato = true;
    }, 500);
    setTimeout(() => {
      this.emailLabel = true;
    }, 1000);
    setTimeout(() => {
      this.email = true;
    }, 1500);
    setTimeout(() => {
      this.redesLabel = true;
    }, 2000);
    setTimeout(() => {
      this.img = true;
    }, 2500);
  },
};
</script>

<style scoped>
.contato-container {
  padding-top: 46px;
  color: rgb(209, 209, 209);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.contato {
  font-size: 48px;
  margin-bottom: 70px;
}
.email-label {
  font-size: 24px;
}
.email {
  font-size: 48px;
  margin-bottom: 70px;
}
.redes-label {
  font-size: 24px;
  margin-bottom: 10px;
}
.redes {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
.redes-item {
  margin: 10px;
  max-width: 50px;
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
  margin: 20px;
  position: fixed;
  bottom: 0;
}

.trasitionSuperior-enter,
.trasitionSuperior-leave-to {
  opacity: 0;
}

.trasitionSuperior-enter-active,
.trasitionSuperior-leave-to {
  transition: opacity 1s;
}

@keyframes slide {
  from {
    transform: translate3d(-50px, 0, 0);
  }

  to {
    transform: translate3d(0px, 0, 0);
  }
}

.contato,
.email-label,
.email,
.redes-label {
  animation: slide 1s;
}
</style>