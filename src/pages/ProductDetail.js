import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function ProductDetail() {
    let { name } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService();
        productService.getByProductName(name).then(result => setProduct(result.data.data)).catch()
        //sürekli istek yapmayı engellemek için
    }, [])

    return (
        
        <div>
            
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
        <Table.HeaderCell>Açıklama</Table.HeaderCell>
     
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          {product.productName}
        </Table.Cell>
        <Table.Cell>{product.quantityPerUnit}</Table.Cell>
        
      </Table.Row>

    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>
         
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        </div>
        
    )
}
