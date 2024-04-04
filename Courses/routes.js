import * as dao from "./dao.js";

export default function CourseRoutes(app) {

app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const status =  await dao.updateCourse(id, req.body);
        res.json(status);
      });
    
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  }); 

  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse( { ...req.body,
    _id: new Date().getTime().toString() });
    res.json(course);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const status = await dao.deleteCourse(id);
    res.json(status)
  });
  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params.id;
    const course = await dao.findCourseById(id)
    res.json(course)
  });



}