import Card from '@mui/material/Card';

function MyCard(props) {
  return (
    <Card
      style={{
        padding: '50px',
      }}>
      {props.children}
    </Card>
  );
}

export default MyCard;
