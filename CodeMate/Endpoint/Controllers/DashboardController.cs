using System.Collections.Generic;
using Endpoint.Resources;
using Microsoft.AspNetCore.Mvc;

namespace Endpoint.Controllers
{
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        [HttpGet, Route("card")]
        public IActionResult Get()
        {
            var result = new List<DashboardCardResource>
            {
                new DashboardCardResource
                {
                    FirstName = "John",
                    LastName = "Doe",
                    NickName = "FancyJohn",
                    Technology = ".NET"
                },
                new DashboardCardResource
                {
                    FirstName = "Mike",
                    LastName = "Novak",
                    NickName = "FancyMike",
                    Technology = "Java"
                },
                new DashboardCardResource
                {
                    FirstName = "Test",
                    LastName = "Test",
                    NickName = "FancyTest",
                    Technology = "Testing"
                }
            };

            return Ok(result);
        }
    }
}
