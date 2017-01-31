using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TestTask.Models
{
    public class TaskModel
    {
        [Key]
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public string Priority { get; set; }
        public DateTime Date { get; set; }
        public string Comment { get; set; }
        public bool Complete { get; set; }
    }
}