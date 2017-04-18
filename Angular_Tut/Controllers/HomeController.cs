using System.Web.Mvc;

namespace Angular_Tut.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View("IndexHome");
        }
    }
}