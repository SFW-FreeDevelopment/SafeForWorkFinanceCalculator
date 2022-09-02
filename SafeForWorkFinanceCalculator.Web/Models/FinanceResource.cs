namespace SafeForWorkFinanceCalculator.Web.Models;

public abstract class FinanceResource
{
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}