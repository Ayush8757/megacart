import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchConatiner = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchConatiner>
            <Input />
            <Search style = {{color: "gray", fontSize:16}}/>
          </SearchConatiner>
        </Left>
        <Center>
          <Logo>MegaCart</Logo>
        </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
