import { Typography } from '@mui/material'
import ProductListItem from './ProductListitem'


type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography component="h2" variant="h3" align="center">
                List of Products
            </Typography>
            <Grid container spacing={4}>
                <Grid  item xs={12} sm={6} md={4}>
                <ProductListItem />
                </Grid>
                <Grid  item xs={12} sm={6} md={4}>
                <ProductListItem />
                </Grid>
                <Grid  item xs={12} sm={6} md={4}>
                <ProductListItem />
                </Grid>
            </Grid>
            
        </>
    )
}
export default ProductList