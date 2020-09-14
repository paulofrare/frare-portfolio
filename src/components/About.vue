<template>
  <div>
    <div class="about-container">
      <transition name="trasitionSuperior" appear>
        <div class="frase italic">Um pouco sobre mim ...</div>
      </transition>
      <div class="about-section">
        <transition name="trasitionSuperior">
          <div v-if="titulo1" class="about-section-titulo bold">Quem é Paulo Frare?</div>
        </transition>
        <transition name="trasitionSuperior">
          <div v-if="texto1" class="about-section-texto">
            <p>
              <span class="bold italic">Gaúcho</span>,
              <span class="realce italic">Gremista</span>, tenho 28 anos e moro em uma cidade do interior chamada
              <span
                class="bold italic"
              >Rio Grande</span> (não o estado, a cidade mesmo).
            </p>
            <p>Sou um grande curioso sobre tudo no mundo (ou quase tudo, não gosto de fofoca), e além de faculdade e trabalho, divido meu tempo em assistir meu futebol, ler um bom livro de ficção cientifica, uma corridinha diária (ou não tãão diária assim, mas me esforço), e aprecio um bom café e uma cerva bem gelada.</p>
          </div>
        </transition>
      </div>
      <div class="about-section">
        <transition name="trasitionSuperior">
          <div v-if="titulo2" class="about-section-titulo bold">O que eu faço?</div>
        </transition>
        <transition name="trasitionSuperior">
          <div v-if="texto2" class="about-section-texto">
            <p>
              Começei a codar tem 2 anos. Em 2018 iniciei faculdade de
              <span
                class="italic bold"
              >Analise e Desenvolvilmento de Sistemas</span>, a qual ainda estou cursando, e em 2019 larguei meu antigo emprego para estagiar como desenvolvedor.
            </p>
            <p>
              Hoje sou
              <span class="realce italic">Desenvolvedor Web</span>, focado no
              <span class="bold italic">front-end</span>. Comecei desenvolvendo em um sistema em
              <span class="realce italic">PHP</span>, utilizando
              <span class="realce italic">Materialize</span> como framework CSS, mas também fazendo manutenção em aplicativos
              <span
                class="realce italic"
              >android</span> com
              <span class="realce italic">cordova</span>. Pouco depois comecei a me aprofundar no
              <span class="realce italic">JavaScript</span> e em
              <span class="realce italic">VueJS</span>, sendo essas as principais ferramentas que utilizo hoje.
            </p>
            <p>
              Além do JS, ao qual me dedico em ser uma especialidade, me aventuro também na carreira de
              <span
                class="realce italic"
              >UX/UI Design</span>, estudando os
              <span class="bold italic">conceitos</span> e as
              <span class="bold italic">ferramentas</span> para entregar trabalhos mais completos abrangendo desde as pesquisas sobre
              <span
                class="bold italic"
              >negócio</span> e
              <span class="bold italic">usuários</span>, criação do
              <span class="bold italic">layout</span>,
              <span class="bold italic">prototipação</span> até finalmente o desenvolvimento do sistema.
            </p>
          </div>
        </transition>
      </div>
      <div class="about-section">
        <transition name="trasitionSuperior">
          <div v-if="titulo3" class="about-section-titulo bold">Minha ocupação atual</div>
        </transition>
        <transition name="trasitionSuperior">
          <div v-if="texto3" class="about-section-texto">
            <p>
              Em 2019, iniciei minha carreira com
              <span class="bold italic">desenvolvimento</span> na
              <span class="realce italic">Vetorial Internet</span>, uma empresa provedora de Internet situada em
              <span class="bold italic">Rio Grande</span>. Comecei como estagiário e 5 meses depois passei a desenvolvedor
              <span
                class="bold italic"
              >fron-end</span>, ocupação em que estou atualmente.
            </p>
            <p>
              Na Vetorial, trabalho na
              <span class="bold italic">manutenção</span> e
              <span class="bold italic">desenvolvimento</span> de alguns sistemas internos, sendo eles três sistemas web, um site institucional e três aplicativos andróid.
              Nesses sistemas, utilizo tecnologias como
              <span
                class="realce italic"
              >PHP + Materialize</span>,
              <span class="realce italic">JS</span>,
              <span class="realce italic">Apache Cordova</span>,
              <span class="realce italic">VueJS + Quasar/Vuetify</span>.
            </p>
          </div>
        </transition>
      </div>
      <transition-group v-if="footer" class="footer" mode="out-in">
        <q-separator key="1" class="separator-footer" dark />
        <div
          class="text-footer"
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
      this.titulo1 = true;
    }, 500);
    setTimeout(() => {
      this.texto1 = true;
    }, 1000);
    setTimeout(() => {
      this.titulo2 = true;
    }, 1500);
    setTimeout(() => {
      this.texto2 = true;
    }, 2000);
    setTimeout(() => {
      this.titulo3 = true;
    }, 2500);
    setTimeout(() => {
      this.texto3 = true;
    }, 3000);
    setTimeout(() => {
      this.footer = true;
    }, 3500);
  },
};
</script>

<style scoped>
.about-container {
  color: rgb(209, 209, 209);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 130vh;
  padding-left: 20px;
  padding-right: 20px;
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
  bottom: 0;
  z-index: 1000;
  background-color: #252525;
  padding: 20px;
}

.realce {
  color: #3aadf5;
}

.bold {
  font-weight: 600;
}

.italic {
  font-style: italic;
}

.inicial {
  border-bottom: 2px solid #3aadf5;
}

.text-footer {
  text-align: center;
}
</style>