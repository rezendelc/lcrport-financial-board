import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { totalBalanceData, expensesData, profitData, revenueData } from '../user-data';
import FinancialSummaryCard from './financial-summary-card';


export default function Dashboard() {
  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
      <Grid size={3}>
        <FinancialSummaryCard 
          title='Total Balance'
          summary={totalBalanceData[totalBalanceData.length - 1].value}
          data={totalBalanceData.map(item => item.value)}
          color={'#475569'}
          xLabel={totalBalanceData.map(item => item.month)}
        />
      </Grid>
      <Grid size={3}>
        <FinancialSummaryCard 
          title='Total Revenue'
          summary={
            revenueData
            .map(item => item.value)
              .reduce((acc, cur) => acc + cur)
          }
          data={revenueData.map(item => item.value)}
          color={'#2563EB'}
          xLabel={revenueData.map(item => item.month)}
        />
      </Grid>
      <Grid size={3}>
        <FinancialSummaryCard 
          title='Total Expenses'
          summary={
            expensesData
            .map(item => item.value)
              .reduce((acc, cur) => acc + cur)
          }
          data={expensesData.map(item => item.value)}
          color={'#EF4444'}
          xLabel={expensesData.map(item => item.month)}
        />
      </Grid>
      <Grid size={3}>
        <FinancialSummaryCard 
          title='Total Profit'
          summary={
            profitData
            .map(item => item.value)
              .reduce((acc, cur) => acc + cur)
          }
          data={profitData.map(item => item.value)}
          color={'#22C55E'}
          xLabel={profitData.map(item => item.month)}
        />
      </Grid>

      <Grid size={8}>
        <Card>
          <div className='p-4'>
            Overview (Revenue x Expenses x Profit)
          </div>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], position: 'none' }]}
            yAxis={[{ position: 'none' }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                showMark: false
              },
            ]}
            height={400}
          />
        </Card>
      </Grid>


      <Grid size={4}>
        <Card>Recent Transactions</Card>
      </Grid>


    </Grid>
  );
}