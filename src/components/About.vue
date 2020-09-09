<template>
  <div>
    <div class="about-container">
      <transition name="trasitionSuperior">
        <div v-if="frase" class="frase">Espaço reservado para uma frase de efeito!</div>
      </transition>
      <div class="about-section">
        <transition name="trasitionSuperior">
          <div v-if="titulo1" class="about-section-titulo">Quem é Paulo Frare?</div>
        </transition>
        <transition name="trasitionSuperior">
          <div v-if="texto1" class="about-section-texto">
            <p>Gaúcho, Gremista, 28 anos e moro em uma cidade do interior chamada Rio Grande (não o estado, a cidade mesmo).</p>
            <p>Sou um grande curioso sobre tudo no mundo (ou quase tudo, não gosto de fofoca ), e alem de faculdade e trabalho, divido meu tempo em assistir meu futebol, ler um bom livro de ficção cientifica, uma corridinha diária (ou não tãão diária assim, mas me esforço), e aprecio um bom café, uma cerva gelada ou aquele mate amargo com bergamota.</p>
          </div>
        </transition>
      </div>
      <div class="about-section">
        <transition name="trasitionSuperior">
          <div v-if="titulo2" class="about-section-titulo">O que eu faço?</div>
        </transition>
        <transition name="trasitionSuperior">
          <div v-if="texto2" class="about-section-texto">
            <p>Começei a codar ha 2 anos, praticando um pouco de lógica, e pouco tempo depois ja estava totalmente focado no assunto. Em 2018 começei faculdade de Analise e Desenvolvilmento de sistemas e em 2019 larguei meu antigo emprego para estagiar como desenvolvedor.</p>
            <p>Hoje sou desenvolvedor Web, focado no front-end. Comecei desenvolvendo em um sistema em PHP, utilizando materialze como framework CSS, mas também fazendo manutenção em aplicativos android com cordova. Pouco depois comecei a me aprofundar no Javascript e em VueJS, sendo essas as principais ferramentas que utilizo hoje.</p>
            <p>Além do JS, ao qual me dedico em ser uma especialidede, me aventuro também na carreira de UX/UI Design, estudando os conceitos e as ferramentas para entregar trabalhos mais completos abrangendo desde as pesquisas sobre negocio e usuarios, criação do layout, prototipação até finalmente o desenvolvimento do sistema.</p>
          </div>
        </transition>
      </div>
      <div class="about-section">
        <transition name="trasitionSuperior">
          <div v-if="titulo3" class="about-section-titulo">Minha ocupação atual</div>
        </transition>
        <transition name="trasitionSuperior">
          <div v-if="texto3" class="about-section-texto">
            <p>Em 2019, iniciei minha carreira com desenvolvimento na Vetorial Internet, uma empresa provedora de Internet situada em Rio Grande. Comecei como estagiario e 5 meses depois passei a desenvolvedor fron-end, ocupação em que estou atualmente.</p>
            <p>
              Na Vetorial, trabalho na matutenção e desenvolvimento de alguns sistemas internos, sendo eles três sistemas web, um site institucional e três aplicativos andróid.
              Nesses sistemas, utilizo tecnologias como PHP + Materialize, JS, Apache Cordova, VueJS + Quasar/Vuetify.
            </p>
          </div>
        </transition>
      </div>
      <transition-group v-if="footer" class="footer" mode="out-in">
        <q-separator key="1" class="separator-footer" dark />
        <div
          key="2"
        >© 2020 Paulo Frare | Desenvolvedor Front-end & UI/UX Designer | Todos os diretos reservados</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frase: false,
      titulo1: false,
      titulo2: false,
      titulo3: false,
      texto1: false,
      texto2: false,
      texto3: false,
      footer: false,
    };
  },
  methods: {},
  created() {
    setTimeout(() => {
      this.frase = true;
    }, 500);
    setTimeout(() => {
      this.titulo1 = true;
    }, 1000);
    setTimeout(() => {
      this.titulo2 = true;
    }, 2000);
    setTimeout(() => {
      this.titulo3 = true;
    }, 3000);
    setTimeout(() => {
      this.texto1 = true;
    }, 1500);
    setTimeout(() => {
      this.texto2 = true;
    }, 2500);
    setTimeout(() => {
      this.texto3 = true;
    }, 3500);
    setTimeout(() => {
      this.footer = true;
    }, 4000);
  },
};
</script>

<style scoped>
.about-container {
  color: rgb(209, 209, 209);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 130vh;
  /* margin: 0 auto; */
}

.frase {
  margin-top: 26px;
  margin-bottom: 50px;
  font-size: 2.5rem;
}

.about-section {
  margin-top: 38px;
  margin-bottom: 50px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.about-section-titulo {
  font-size: 2rem;
  margin-bottom: 15px;
}
.about-section-texto {
  font-size: 1.2rem;
  line-height: 1.5;
}

.trasitionSuperior-enter,
.trasitionSuperior-leave-to {
  opacity: 0;
}

.trasitionSuperior-enter-active,
.trasitionSuperior-leave-to {
  transition: opacity 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-to {
  transition: opacity 1s;
}

.frase,
.about-section-titulo,
.about-section-texto {
  animation: slide 1s;
}

@keyframes slide {
  from {
    transform: translate3d(-50px, 0, 0);
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
  margin: 20px;
}
</style>