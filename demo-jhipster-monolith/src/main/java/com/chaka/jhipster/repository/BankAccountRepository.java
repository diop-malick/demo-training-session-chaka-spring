package com.chaka.jhipster.repository;

import com.chaka.jhipster.domain.BankAccount;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the BankAccount entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {

    @Query("select bank_account from BankAccount bank_account where bank_account.user.login = ?#{principal.username}")
    List<BankAccount> findByUserIsCurrentUser();

}
