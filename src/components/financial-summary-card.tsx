import { Card } from '@mui/material';
import { LineChart } from '@mui/x-charts';

interface FinancialSummaryCardInterface {
  title: string,
  summary: number,
  data: number[],
  color: string
  xLabel: string[]
}

export default function FinancialSummaryCard({title, summary, data, color, xLabel }: FinancialSummaryCardInterface) {
  let formatter = Intl.NumberFormat('en', { notation: 'compact' });
  const valueSummaryFormatted = formatter.format(summary);

  return (
    <Card sx={[{ color: color }]}>
      <div className="mt-4">
        <div className="px-8">
          <span><strong>{title}</strong></span>
          <p className='text-5xl flex justify-start'> ${valueSummaryFormatted} </p>
        </div>
        <LineChart
          series={
            [{
              data: data,
              area: true,
              showMark: false,
              color: color,
            }]}
          xAxis={[{ scaleType: 'point', data: xLabel, position: 'none' }]}
          yAxis={[{ 
            position: 'none',
            domainLimit: () => { return {min: Math.min(...data), max: Math.max(...data)}},
            disableTicks: true
          }]}
          sx={{
            maxHeight: 75
          }}
          margin={0}
        />
      </div>
    </Card>
  );
}