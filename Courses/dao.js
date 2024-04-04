import model from "./model.js";
export const createCourse = (course) => {
    delete course._id
    return model.create(course);
  }
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const updateCourse = (id, course) =>
  model.updateOne({ id: id }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ id: courseId });
