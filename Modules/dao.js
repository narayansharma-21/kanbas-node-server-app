import ModuleModel from "./model.js";

export const createModule = (module) => {
    delete module._id
    return ModuleModel.create(module);
  }
export const findAllModules = () => {
    return ModuleModel.find();
}
export const findModuleById = (moduleId) => ModuleModel.findById(moduleId);
export const updateModule = (moduleId, module) =>  ModuleModel.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => ModuleModel.deleteOne({ _id: moduleId });
