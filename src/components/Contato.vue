<template>
  <div>
    <div class="contato-container">
      <transition name="trasitionSuperior" appear>
        <div class="contato">Contato</div>
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
          <q-icon
            @click="redirect('https://github.com/paulofrare')"
            class="redes-item"
            size="50px"
            name="fab fa-github-square"
          />
          <q-icon
            @click="redirect('https://www.linkedin.com/in/paulo-frare/')"
            class="redes-item"
            size="50px"
            name="fab fa-linkedin"
          />
          <q-icon
            @click="redirect('https://www.instagram.com/paulofrare/')"
            class="redes-item"
            size="50px"
            name="fab fa-instagram-square"
          />
          <q-icon
            @click="redirect('https://www.facebook.com/paulofrare/')"
            class="redes-item"
            size="50px"
            name="fab fa-facebook-square"
          />
          <q-icon
            @click="redirect('https://api.whatsapp.com/send?phone=5553991258748')"
            class="redes-item"
            size="50px"
            name="fab fa-whatsapp-square"
          />
        </div>
      </transition>
      <transition mode="out-in">
        <div v-if="footer" class="footer">
          <q-separator key="1" class="separator-footer" dark />
          <div
            class="text-footer"
            key="2"
          >© 2020 Paulo Frare | Desenvolvedor Front-end & UI/UX Designer | Todos os diretos reservados</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailLabel: false,
      email: false,
      redesLabel: false,
      img: false,
      footer: false,
    };
  },
  methods: {
    redirect(url) {
      window.open(url);
    },
  },
  created() {
    setTimeout(() => {
      this.emailLabel = true;
    }, 500);
    setTimeout(() => {
      this.email = true;
    }, 1000);
    setTimeout(() => {
      this.redesLabel = true;
    }, 1500);
    setTimeout(() => {
      this.img = true;
    }, 2000);
    setTimeout(() => {
      this.footer = true;
    }, 2300);
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
  margin-top: 100px;
}

.contato {
  font-size: 48px;
  margin-bottom: 70px;
}
.email-label {
  font-size: 24px;
}
.email {
  color: #3aadf5;
  font-size: 48px;
  margin-bottom: 70px;
  font-style: italic;
  font-weight: 200;
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
  cursor: pointer;
}

.redes-item:hover {
  color: #3aadf5;
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

.text-footer {
  text-align: center;
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

@media only screen and (max-width: 600px) {
  .email {
    font-size: 24px;
  }

  .email-label {
    font-size: 16px;
  }

  .redes-label {
    font-size: 16px;
  }

  .contato {
    font-size: 32px;
  }

  .footer {
    z-index: 1000;
    background-color: #252525;
    padding: 10px;
    position: relative;
  }

  .redes-item {
    margin: 2px;
  }
}
</style>