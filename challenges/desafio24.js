db.voos.findOne({ $and: [{ litrosCombustivel: { $lte: 600 } },
   { "empresa.nome": { $nin: ["GOL", "AZUL"] } }],
 }, { vooId: true, litrosCombustivel: true, _id: false, "empresa.nome": true });