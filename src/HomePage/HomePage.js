import React from 'react';
import Chart from "../Chart/Chart"; // Adjust the import path if necessary
import D3Chart from "../Chart/D3Chart"; // Adjust the import path if necessary



function HomePage() {
  return (
    <main className="center" id="main">

    <div className="page-area">
       
        <section className="page -area">
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
        
        <article>
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear...
                because they know it is all good and accounted for.
            </p>
        </article>

        <article>
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </article>

        <article>
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear...
                because they know it is all good and accounted for.
            </p>
        </article>
        
        <article aria-live="polite">
            <h2>Chart</h2>
            <p id="chart-description"> This Chart will show your budget in a pie chart.</p>
            <Chart/>
           
            <p>
               
                <canvas id="myChart" width="400" height="400" aria-describedby="chart-description"></canvas>
            </p>
        </article>

        <article aria-live="polite">
            <h2>D3js</h2>
            <D3Chart/>
         
        </article>
    </section>

    </div>

</main>
  );

}

export default HomePage;
