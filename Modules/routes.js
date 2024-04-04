import * as dao from "./dao.js";
import db from "../Kanbas/Database/index.js"

function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModules();
    const mods = Object.values(modules).filter((m) => m.course === cid)
    res.send(mods);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = await dao.createModule ({
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    });
    res.json(newModule);
  });
  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    console.log(mid)
    const status = await dao.updateModule(mid, req.body)
    res.json(status);
  });



}
export default ModuleRoutes;