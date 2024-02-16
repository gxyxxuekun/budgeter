import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const StyledCard = styled(Card)`
  margin: 20px;
`

interface ProductCardProps {
    productName: string;
    description:string;
    id: string;
}


function ProductCard(props: ProductCardProps) {
    return (
        <StyledCard>

            <CardContent>
            <h3>
                {props.productName}
            </h3>
            <p>
                {props.description}
            </p>
            </CardContent>
        <CardActions>
        <NavLink to={`/products/${props.id}`}>
        <Button variant="outlined">
          Visit Product Page
        </Button>
      </NavLink>
      <NavLink to={`/products/${props.id}`}>
        <Button variant="outlined">
          Order
        </Button>
      </NavLink>
        </CardActions>

        </StyledCard>
    )
}

export default ProductCard
