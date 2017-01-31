using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TestTask.Models;

namespace TestTask.Controllers
{
    public class TaskModelsController : ApiController
    {
        private TasksContext db = new TasksContext();

        [Route("api/taskmodels/gettasks/")]
        [HttpGet]
        public IEnumerable<TaskModel> GetTasks()
        {
           return db.Tasks.AsEnumerable();
        }

        [Route("api/taskmodels/gettaskmodel/")]
        [HttpGet]
        public IHttpActionResult GetTaskModel(int id)
        {
            TaskModel taskModel = db.Tasks.Find(id);
            if (taskModel == null)
            {
                return NotFound();
            }

            return Ok(taskModel);
        }

        [Route("api/taskmodels/puttaskmodel/")]
        [HttpPut]
        public void PutTaskModel(TaskModel taskModel)
        {
            if (ModelState.IsValid)
            {
                db.Entry(taskModel).State = EntityState.Modified;
                db.SaveChanges();
            }
        }

        [Route("api/taskmodels/posttaskmodel")]
        [HttpPost]
        public void PostTaskModel(TaskModel taskModel)
        {
            if (ModelState.IsValid)
            {
                db.Tasks.Add(taskModel);
                db.SaveChanges();
            }
        }

        [Route("api/taskmodels/completetaskmodel")]
        [HttpPost]
        public void CompleteTaskModel(TaskModelStatus task)
        {
            TaskModel taskModel = db.Tasks.Find(task.TaskId);
            taskModel.Complete = task.Complete;
            db.Entry(taskModel).State = EntityState.Modified;
            db.SaveChanges();
        }

        [Route("api/taskmodels/deletetaskmodel/")]
        [HttpDelete]
        public IHttpActionResult DeleteTaskModel(int id)
        {
            TaskModel taskModel = db.Tasks.Find(id);
            if (taskModel == null)
            {
                return NotFound();
            }

            db.Tasks.Remove(taskModel);
            db.SaveChanges();

            return Ok(taskModel);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TaskModelExists(int id)
        {
            return db.Tasks.Count(e => e.TaskId == id) > 0;
        }
    }
}