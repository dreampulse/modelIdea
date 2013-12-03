var model = require('./lib/model');

var Type = {
  "string" : "string",
  "int" : "int"
};

var AmazonStoreModel = new model("AmazonStore"
  ).virtualAttr("url", Type.string
  ).attr("fileSize", Type.int
  ).attr("fileName", Type.string
  ).operation("sign")  // Todo: attribute validation
  ;


var StammdatenModel = new model("Stammdaten")
    .attr("userId", Type.id)
    .attr("name", Type.string)
    .attr("eMail", Type.string)
    .attr("age", Type.int)
    .operation("resetPassword")
  ;

var PlanModel = new model("Plan")
    .attr("name", Type.string)
    .attrRef("owner", StammdatenModel)
    .attrObj("file", "AmazonStore")
  ;


StammdatenModel.operationImpl("resetPassword", function() {
  console.log('fooo :-)');
});

StammdatenModel.readFilter(function () {
  return true;
});


module.exports = {
  AmazonStoreModel : AmazonStoreModel,
  StammdatenModel : StammdatenModel,
  PlanModel : PlanModel
};