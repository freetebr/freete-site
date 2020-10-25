<template>
  <div class="bg-gray-900 min-h-screen">
    <header id="cabeçalho" class="w-100 bg-gray-800 px-3">
      <div class="max-w-screen-xl mx-auto py-5 flex justify-between items-center">
        <p class="text-xl leading-none text-white font-bold italic">Freete</p>
        <Button class="sm:hidden">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
        <nav class="hidden sm:block">
          <ul class="flex text-gray-300 font-bold space-x-5">
            <li>
              <a href="#"> Documentação </a>
            </li>
            <li>
              <a href="#" class="flex items-center">
                <Github class="w-6 h-6 mr-2" />
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main id="sobre" class="bg-gray-1000">
      <div class="max-w-screen-lg flex flex-col-reverse mx-auto items-center py-5 px-3 md:flex-row xl:px-0">
        <div class="flex-1 space-y-10 text-center py-10 sm:text-left">
          <h1 class="text-gray-100 text-4xl font-bold leading-none md:text-6xl">
            Gateway <nobr>open-source</nobr> de cotação de frete
          </h1>
          <h2 class="text-gray-200 font-light text-xl mt-5 md:text-3xl">
            Cote seu frete com as principais transportadoras atraves de uma API simples e unificada.
          </h2>
          <div class="mt-5 space-y-5 sm:flex sm:space-x-5 sm:space-y-0">
            <Button class="block w-full">Documentação</Button>
            <Button class="block w-full" color="orange">Experimentar</Button>
          </div>
        </div>
        <div id="sobre-imagem" class="w-full flex-1 flex items-center justify-center">
          <img class="max-w-full h-lg md:h-xl" src="~/assets/parcels.svg" alt="" />
        </div>
      </div>
    </main>
    <div id="transportadoras" class="bg-gray-1000">
      <div class="max-w-screen-lg mx-auto flex flex-col items-center py-10 px-3 xl:px-0">
        <h3 class="text-xl uppercase tracking-widest font-bold text-gray-300">Transportadoras</h3>
        <ul
          class="flex flex-col justify-between space-y-10 items-center my-10 w-full sm:flex-row sm:space-y-0 sm:space-x-5"
        >
          <li v-for="transportadora in transportadoras" :key="transportadora.id">
            <a :href="transportadora.link">
              <img :src="transportadora.imagem" :alt="transportadora.id + 'logo'" class="transportadora-imagem" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <section id="parquinho" class="bg-gray-900">
      <div class="max-w-screen-lg mx-auto flex flex-col items-center py-10">
        <h3 class="text-xl uppercase tracking-widest font-bold text-gray-300">playground</h3>
        <div class="w-full flex flex-col space-y-10 px-3 lg:space-y-0 lg:flex-row space-around mt-10 lg:space-x-10">
          <form class="lg:w-1/2 flex flex-col items-start space-y-5" @submit.prevent="cotar">
            <h4 class="uppercase text-gray-300 font-bold border-b border-orange-500 pr-5 tracking-widest">Entrega</h4>
            <div class="flex w-full flex-col mt-5 sm:flex-row sm:space-x-5">
              <Input id="origem" v-model="form.origem" type="text" label="origem" />
              <Input id="destino" v-model="form.destino" type="text" label="destino" />
            </div>
            <div class="flex w-full flex-col mt-5 sm:flex-row sm:space-x-5">
              <Input id="remetente" v-model="form.remetente" type="text" label="remetente" />
              <Input id="destinatario" v-model="form.destinatario" type="text" label="destinatario" />
            </div>
            <h4 class="uppercase text-gray-300 font-bold border-b border-orange-500 pr-5 tracking-widest">Pacote</h4>
            <div class="flex w-full flex-col mt-5 sm:flex-row sm:space-x-5">
              <Input id="altura" v-model="form.altura" type="number" label="altura" suffix="cm" step=".1" />
              <Input id="largura" v-model="form.largura" type="number" label="largura" suffix="cm" step=".1" />
            </div>
            <div class="flex w-full flex-col mt-5 sm:flex-row sm:space-x-5">
              <Input
                id="comprimento"
                v-model="form.comprimento"
                type="number"
                label="comprimento"
                suffix="cm"
                step=".1"
              />
              <Input id="peso" v-model="form.peso" type="number" label="peso" suffix="kg" step=".1" />
            </div>
            <Button type="submit" color="orange" class="self-center md:self-end">Cotar</Button>
          </form>
          <div class="lg:w-1/2 flex flex-col items-start space-y-5">
            <h4 class="uppercase text-gray-300 font-bold border-b border-orange-500 pr-5 tracking-widest">
              Requisição
            </h4>
            <Code class="w-full" lang="bash" :str="request"></Code>
            <h4 class="uppercase text-gray-300 font-bold border-b border-orange-500 pr-5 tracking-widest">Resposta</h4>
            <Code class="w-full" lang="json5" :str="json" />
          </div>
        </div>
      </div>
    </section>
    <div id="funcionalidades" class="w-full bg-gray-1000">
      <div class="max-w-screen-lg mx-auto flex flex-col items-center py-10">
        <h3 class="text-xl uppercase tracking-widest font-bold text-gray-300">Funcionalidades</h3>
        <div
          class="mt-10 flex flex-col items-center space-y-10 w-full justify-between md:flex-row md:items-start md:space-x-10 md:space-y-0 px-3 xl:px-0"
        >
          <div class="flex-1 flex flex-col items-center justify-center space-y-5">
            <Extensible stroke="red" fill="transparent" />
            <p class="text-gray-200 font-bold uppercase tracking-wider">Extensível</p>
            <p class="text-gray-300 text-center">
              Padrões de códigos bem definidos que facilitam a extensão para inserção de outras transportadoras.
            </p>
          </div>
          <div class="flex-1 flex flex-col items-center justify-center space-y-5">
            <Unified stroke="red" fill="transparent" />
            <p class="text-gray-200 font-bold uppercase tracking-wider">Unificada</p>
            <p class="text-gray-300 text-center">Uma única implementação para suprir todas as transportadoras.</p>
          </div>
          <div class="flex-1 flex flex-col items-center justify-center space-y-5">
            <Configurable stroke="red" fill="transparent" />
            <p class="text-gray-200 font-bold uppercase tracking-wider">Configurável</p>
            <p class="text-gray-300 text-center">
              Várias configurações out-of-the-box para você conseguir deixar a API do seu jeito.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      transportadoras: [
        {
          id: 'jamef',
          imagem: require('~/assets/jamef.svg'),
          link: '',
        },
        {
          id: 'correios',
          imagem: require('~/assets/correios.svg'),
          link: '',
        },
        {
          id: 'jadlog',
          imagem: require('~/assets/jadlog.svg'),
          link: '',
        },
        {
          id: 'braspress',
          imagem: require('~/assets/braspress.svg'),
          link: '',
        },
      ],
      form: {
        origem: '86061270',
        destino: '86400000',
        remetente: '60701190000104',
        destinatario: '30539356867',
        altura: 0.5,
        largura: 0.5,
        peso: 1,
        comprimento: 0.5,
      },
      json: `[]`,
    };
  },
  computed: {
    request() {
      return `curl -X GET "https://freete-server.herokuapp.com/cotacao?cepOrigem=${this.form.origem}&cepDestino=${this.form.destino}&altura=${this.form.altura}&largura=${this.form.largura}&comprimento=${this.form.comprimento}&peso=${this.form.peso}&remetente=${this.form.remetente}&valor=100.00&destinatario=${this.form.destinatario}"`;
    },
  },
  methods: {
    cotar() {
      this.$axios
        .$get('/cotacao', {
          params: {
            cepOrigem: this.form.origem,
            cepDestino: this.form.destino,
            remetente: this.form.remetente,
            destinatario: this.form.destinatario,
            altura: this.form.altura,
            largura: this.form.largura,
            valor: 100.0,
            comprimento: this.form.comprimento,
            peso: this.form.peso,
          },
        })
        .then((resposta) => {
          this.json = JSON.stringify(resposta, null, 2);
        })
        .catch((err) => {
          this.json = JSON.stringify(err, null, 2);
        });
    },
  },
});
</script>

<style lang="scss" scoped>
#sobre {
  background-image: url('~assets/blob.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
}

.transportadora-imagem {
  max-width: 100%;
  height: 50px;
  filter: grayscale(100%) contrast(10%);
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: none;
  }
}
</style>
