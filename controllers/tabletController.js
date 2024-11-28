const axios = require("axios");

exports.tabletZIA = async (req, res) => {
  const id_machine = req.params.id;
  const apiUrl = `http://192.168.200.200:1880/maquinas/${id_machine}`;

  try {
    // Fazer a requisição à API
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error(`Erro: status ${response.status} da API`);
    }
    //console.log("response.data")
    const data = response.data;

    console.log(JSON.stringify(data,null,2))

    // Verifica se 'data.apontamentos' é um array de pares antes de filtrar
    const filteredApontamentos = Array.isArray(data.apontamentos)
      ? data.apontamentos
          .filter(([, evento]) => evento.machine_event.payload.machine_id == id_machine)
          .map(([apontamentoId, evento]) => ({ id: apontamentoId, ...evento })) // opcional: adiciona o ID do apontamento no objeto final
      : [];

          //console.log("response.data")
      //console.log(filteredApontamentos)

    // Renderiza a página com `data` disponível

    res.render("tabletZIA", { id_machine, data, filteredApontamentos });
  } catch (error) {
    console.error("Erro ao buscar dados:", error.message);
    res.status(500).send("Erro ao buscar dados da API");
    
  }
};


exports.tabletZIAteste = async (req, res) => {
  

  try {
   

    res.render("teste");
  } catch (error) {
    res.status(500).send("Erro");
    
  }
};

exports.inicial = async (req, res) => {
  

  try {
   

    res.render("inicial");
  } catch (error) {
    res.status(500).send("Erro");
    
  }
};