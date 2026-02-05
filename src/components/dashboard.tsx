import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { LineChart } from '@mui/x-charts';

export default function Dashboard() {
  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
      <Grid size={3}>
        <Card>
          <div className='px-8 py-4'>
            <span>Total Balance</span>
            <p className='text-5xl flex justify-center text-green-600'> $30,000 </p>
          </div>
        </Card>
      </Grid>
      <Grid size={3}>
        <Card>
          <div className='flex'>
            <div className='p-4'>
              Total Balance
            </div>
          </div>
        </Card>
      </Grid>
      <Grid size={3}>
        <Card>
          <div className='flex'>
            <div className='p-4'>
              Total Balance
            </div>
          
          </div>
        </Card>
      </Grid>
      <Grid size={3}>
        <Card>
          <div className='flex'>
            <div className='p-4'>
              Total Balance
            </div>
          </div>
        </Card>
      </Grid>

      <Grid size={7}>
        <Card>
          <div className='flex'>
            <div className='p-4'>
              Total Balance
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
          </div>
        </Card>
      </Grid>


      <Grid size={5}>
        <Card>7</Card>
      </Grid>


    </Grid>
  );
}