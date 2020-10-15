exports.addCommand = function(commandName, commandObject, commands) {
  try {
    commands[commandName] = commandObject;
  } catch (err) {
    console.log('Error addCommand: ' + err);
  }
};
exports.addCustomFunc = function(customFunc) {
  try {
    customFunc(bot);
  } catch (err) {
    console.log('Error addCustomFunc: ' + err);
  }
};
exports.commandCount = function(commands) {
  return Object.keys(commands).length;
};
